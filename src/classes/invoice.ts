//module

class Invoice {
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
    return `${this.client} ${this.details} ${this.amount}`;
  }
}

export default Invoice;
//module