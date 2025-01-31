import { Product } from "@/db/types"
import { database } from "../config/config";
import { z } from "zod";

const ProductValidation = z.object({
  name: z.string({
    required_error: "Name cant be empty",
  }),
  slug: z.string({
    required_error: "Slug cant be empty",
  }),
});

export default class ProductModel {
  static productCollection() {
    return database.collection<Product>("products");
  }

  static async getAllProducts() {
    const data = await this.productCollection().find().toArray()
    return data;
  }

  static async getProductBySlug(slug: String) {
    const data = await this.productCollection().findOne({ slug });
    return data
  }

  
  static async findAndSortAll(page: number, pageSize: number = 9): Promise<Product[]> {
    try {
      const skipValue = (page - 1) * pageSize;
      
      const result = await this.productCollection().find()
        .skip(skipValue)
        .limit(pageSize)
        .toArray();
      
        // console.log(result, "hasil tanpa search");
        
      return result;
    } catch (error) {
      console.error("Error fetching and sorting products:", error);
      throw error;
    }
  }

  static async getFeaturedProducts() {
    const data = await this.getAllProducts()
    const featured = data.slice(0, 6)
    return featured;
  }
}