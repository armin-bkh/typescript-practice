//interface in classes
class Payment {
    constructor(recipeint, details, amount) {
        this.recipeint = recipeint;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipeint} is owed ${this.amount} for ${this.details}`;
    }
}
export default Payment;
//interface in classes
