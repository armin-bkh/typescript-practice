import { hasFormatter } from "../interfaces/hasFormatter.js";

//interface in classes

class Payment implements hasFormatter {
  constructor(
    readonly recipeint: string,
    private details: string,
    public amount: number
  ) {}

  format() {
      return `${this.recipeint} is owed ${this.amount} for ${this.details}`
  }
}

export default Payment

//interface in classes
