import { readFileSync } from 'fs';

import { IColorName } from '../interfaces/color-names.interface';

export class NameThatColor {
  constructor() {
    const file = readFileSync(`${__dirname}/color-names.json`, 'utf8');
    if (file) {
      this.colorsData = JSON.parse(file).map((color: [][]) => {
        const colorString = `#${color[0]}`;
        const colorName = `${color[1]}`;
        const hsl = this.hsl(colorString);
        const rgb = this.rgb(colorString);
        return {
          colorString,
          colorName,
          hsl,
          rgb,
        } as IColorName;
      });
    } else {
      console.error('You need a ./color-names.json file in the same directory');
    }
  }

  private colorsData: IColorName[];

  private hsl(color: string) {
    const rgb = [
      parseInt('0x' + color.substring(1, 3)) / 255,
      parseInt('0x' + color.substring(3, 5)) / 255,
      parseInt('0x' + color.substring(5, 7)) / 255,
    ];
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];

    const min = Math.min(r, Math.min(g, b));
    const max = Math.max(r, Math.max(g, b));
    const delta = max - min;
    const l = (min + max) / 2;

    const s = l > 0 && l < 1 ? delta / (l < 0.5 ? 2 * l : 2 - 2 * l) : 0;

    let h = 0;
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += 2 + (b - r) / delta;
      if (max == b && max != r) h += 4 + (r - g) / delta;
      h /= 6;
    }
    return [h * 255 || 0, s * 255 || 0, l * 255 || 0];
  }

  private rgb(color: string) {
    return [
      parseInt('0x' + color.substring(1, 3)) || 0,
      parseInt('0x' + color.substring(3, 5)) || 0,
      parseInt('0x' + color.substring(5, 7)) || 0,
    ];
  }

  public getName(color: string) {
    color = color.toUpperCase();
    if (color.length < 3 || color.length > 7)
      return ['#000000', 'Invalid Color: ' + color, false];
    if (color.length % 3 == 0) color = '#' + color;
    if (color.length == 4)
      color =
        '#' +
        color.substring(1, 1) +
        color.substring(1, 1) +
        color.substring(2, 1) +
        color.substring(2, 1) +
        color.substring(3, 1) +
        color.substring(3, 1);

    const rgb = this.rgb(color);
    const r = rgb[0],
      g = rgb[1],
      b = rgb[2];
    const hsl = this.hsl(color);
    const h = hsl[0],
      s = hsl[1],
      l = hsl[2];
    let ndf1 = 0;
    let ndf2 = 0;
    let ndf = 0;
    let cl = -1,
      df = -1;

    const foundColor = this.colorsData.find((c) => c.colorString === color);
    if (foundColor) return [foundColor.colorString, foundColor.colorName, true];

    this.colorsData.forEach((aColor, index) => {
      ndf1 =
        Math.pow(r - +aColor.rgb[0], 2) +
        Math.pow(g - +aColor.rgb[1], 2) +
        Math.pow(b - +aColor.rgb[2], 2);
      ndf2 =
        Math.pow(h - +aColor.hsl[0], 2) +
        Math.pow(s - +aColor.hsl[1], 2) +
        Math.pow(l - +aColor.hsl[2], 2);
      ndf = ndf1 + ndf2 * 2;

      if (df < 0 || df > ndf) {
        df = ndf;
        cl = index;
      }
    });

    return cl < 0
      ? ['#000000', 'Invalid Color: ' + color, false]
      : [this.colorsData[cl].colorString, this.colorsData[cl].colorName, false];
  }
}
