import { User } from "@/db/types"
import { database } from "../config/config";
import { z } from "zod";

export const UserValidation = z.object({
  username: z.string({
    required_error: "Username cant be empty",
  }),
  email: z
    .string({
      required_error: "Email cant be empty",
    })
    .email(),
  password: z
    .string({
      required_error: "Password cant be empty",
    })
    .min(5),
});

export default class UserModel {
  static userCollection() {
    return database.collection<User>("users");
  }

  static async createUser(userData: User): Promise<User> {
    try {
      const collection = this.userCollection();

      const result = await collection.insertOne(userData);

      return {
        ...userData,
      };
    } catch (error: any) {
      throw new Error("Failed to create user: " + error.message);
    }
  }
}