export class Formatter {

  static salaryRange(min: any, max: any, currency: String) {
    return min + " - " + max + " " + currency;
  }

  static trimDesc(desc: string) {
    const endingCharIndex = 255;
    return desc.length <= 255 ? desc : desc.slice(0, endingCharIndex).concat("...");
  }
}
