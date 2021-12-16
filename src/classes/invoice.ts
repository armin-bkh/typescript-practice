//module
import { hasFormatter } from '../interfaces/hasFormatter.js'
//module

//interface in classes
class Invoice implements hasFormatter {
  //    readonly client: string;
  //    private details: string;
  //    public amount: number;

  constructor(
    //   c: string, d: string, a: number
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
//interface in classes


export default Invoice;
//module