/*
    հաշվել թվի 1 արժեքով բիթերի քանակը
    ստուգել թվի 1 արժեքով բիթերի քանակը կենտ է, թե զույգ
    կատարել swap գործողություն թվի i և j բիթերը տեղափոխելու համար
    շրջել թվի բիթերը(reverse), օրինակ՝ 11110000 -> 00001111
*/

class ClassBinary {
  constructor(num) {
    this.num = num;
    this.binary = [];
    this.length = 0;
    this.lebgthOne = 0;
  }
  // 1
  binaryLengthOne() {
    for (let i = 0; this.num > 0; i++) {
      this.binary[i] = this.num % 2;
      if (this.binary[i] == 1) this.lebgthOne++;
      this.num = Math.floor(this.num / 2);
    }
    this.length = this.binary.length;
    return this.lebgthOne;
  }
  // 2
  checkEvenՕrՕdd() {
    this.binaryLengthOne();
    return this.lebgthOne % 2 === 0 ? "Even" : "Odd";
  }
  // 3
  swap(index1, index2) {}
  // 4
  reverse() {
    return ~this.num;
  }
}

let binaryNum = new ClassBinary(28);