interface ZalgoOptions {
  top?: boolean;
  middle?: boolean;
  bottom?: boolean;
  maxHeight?: number;
  randomization?: number;
}

export class Zalgo {
  options: ZalgoOptions = {
    top: true,
    middle: true,
    bottom: true,
    maxHeight: 15,
    randomization: 100,
  };

  diacriticsTop: string[] = [];
  diacriticsMiddle: string[] = [];
  diacriticsBottom: string[] = [];

  constructor(options?: ZalgoOptions) {
    this.options = { ...this.options, ...options };

    for (let i = 768; i <= 789; i++) {
      this.diacriticsTop.push(String.fromCharCode(i));
    }

    for (let i = 790; i <= 819; i++) {
      if (i !== 794 && i !== 795) {
        this.diacriticsBottom.push(String.fromCharCode(i));
      }
    }
    this.diacriticsTop.push(String.fromCharCode(794));
    this.diacriticsTop.push(String.fromCharCode(795));

    for (let i = 820; i <= 824; i++) {
      this.diacriticsMiddle.push(String.fromCharCode(i));
    }

    for (let i = 825; i <= 828; i++) {
      this.diacriticsBottom.push(String.fromCharCode(i));
    }

    for (let i = 829; i <= 836; i++) {
      this.diacriticsTop.push(String.fromCharCode(i));
    }
    this.diacriticsTop.push(String.fromCharCode(836));
    this.diacriticsBottom.push(String.fromCharCode(837));
    this.diacriticsTop.push(String.fromCharCode(838));
    this.diacriticsBottom.push(String.fromCharCode(839));
    this.diacriticsBottom.push(String.fromCharCode(840));
    this.diacriticsBottom.push(String.fromCharCode(841));
    this.diacriticsTop.push(String.fromCharCode(842));
    this.diacriticsTop.push(String.fromCharCode(843));
    this.diacriticsTop.push(String.fromCharCode(844));
    this.diacriticsBottom.push(String.fromCharCode(845));
    this.diacriticsBottom.push(String.fromCharCode(846));
    this.diacriticsTop.push(String.fromCharCode(848));
    this.diacriticsTop.push(String.fromCharCode(849));
    this.diacriticsTop.push(String.fromCharCode(850));
    this.diacriticsBottom.push(String.fromCharCode(851));
    this.diacriticsBottom.push(String.fromCharCode(852));
    this.diacriticsBottom.push(String.fromCharCode(853));
    this.diacriticsBottom.push(String.fromCharCode(854));
    this.diacriticsTop.push(String.fromCharCode(855));
    this.diacriticsTop.push(String.fromCharCode(856));
    this.diacriticsBottom.push(String.fromCharCode(857));
    this.diacriticsBottom.push(String.fromCharCode(858));
    this.diacriticsTop.push(String.fromCharCode(859));
    this.diacriticsBottom.push(String.fromCharCode(860));
    this.diacriticsTop.push(String.fromCharCode(861));
    this.diacriticsBottom.push(String.fromCharCode(863));
    this.diacriticsTop.push(String.fromCharCode(864));
    this.diacriticsTop.push(String.fromCharCode(865));
  }

  encode(text: string, options: ZalgoOptions = {}): string {
    this.options = { ...this.options, ...options };

    let newText = '';
    for (let i = 0; i < text.length; i++) {
      let newChar = text[i];

      if (this.options.middle) {
        newChar +=
          this.diacriticsMiddle[
            Math.floor(Math.random() * this.diacriticsMiddle.length)
          ];
      }

      if (this.options.top) {
        const topLength = this.diacriticsTop.length - 1;
        for (
          let count = 0,
            len =
              (this.options.maxHeight ?? 15) -
              Math.random() *
                (((this.options.randomization ?? 100) / 100) * (this.options.maxHeight ?? 15));
          count < len;
          count++
        ) {
          newChar += this.diacriticsTop[Math.floor(Math.random() * topLength)];
        }
      }

      if (this.options.bottom) {
        const bottomLength = this.diacriticsBottom.length - 1;
        for (
          let count = 0,
            len =
              (this.options.maxHeight ?? 15) -
              Math.random() *
                (((this.options.randomization ?? 100) / 100) * (this.options.maxHeight ?? 15));
          count < len;
          count++
        ) {
          newChar +=
            this.diacriticsBottom[Math.floor(Math.random() * bottomLength)];
        }
      }

      newText += newChar;
    }
    return newText;
  }

  decode(text: string): string {
    let newText = '';

    for (let i = 0; i < text.length; i++) {
      const charCode = text[i].charCodeAt(0);
      if (charCode < 768 || charCode > 865) {
        newText += text[i];
      }
    }
    return newText;
  }
}
