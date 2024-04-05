import { User } from "@/db/types";
import { database } from "../config/config";
import { z } from "zod";
import { hashPassword } from "../helpers/bcrypt";

export const UserValidation = z.object({
  username: z
    .string({
      required_error: "Username cant be empty",
    })
    .min(1, {
      message: "Username cant be empty",
    }),
  name: z
    .string({
      required_error: "Name cant be empty",
    })
    .min(1, {
      message: "Name cant be empty",
    }),
  email: z
    .string({
      required_error: "Email cant be empty",
    })
    .email({
      message: "Must be a valid email format",
    }),
  password: z
    .string({
      required_error: "Password cant be empty",
    })
    .min(5, {
      message: "Password must be at least 5 characters long",
    }),
});

export default class UserModel {
  static userCollection() {
    return database.collection<User>("users");
  }

  static async createUser(userData: User): Promise<User> {
    try {
      const collection = this.userCollection();
      userData.password = hashPassword(userData.password);
      const result = await collection.insertOne(userData);

      return {
        ...userData,
      };
    } catch (error: any) {
      throw new Error("Failed to create user: " + error.message);
    }
  }
}
