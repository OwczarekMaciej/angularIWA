export class Fibonacci {
  result: string;
  nthNumber: number;

  constructor(n: number) {
    this.nthNumber = n;
    this.result = "";
  }

  calcFib(): void {
    let fibPrev: bigint = 0n;
    let fibCur: bigint = 1n;

    for (let i = 2; i <= this.nthNumber; i++) {
      const temp: bigint = fibCur;
      fibCur = fibCur + fibPrev;
      fibPrev = temp;
    }

    this.result = fibCur.toString();
  }

  getResult(): string {
    return this.result;
  }

  getNthNumber(): string {
    return String(this.nthNumber);
  }
}
