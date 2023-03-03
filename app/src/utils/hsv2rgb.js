export default function hsv2rgb(hue, value) {
    hue = hue / 60;
    value = value / 100
    const x = value * (1 - Math.abs((hue % 2) - 1));
    let r, g, b;
    if (hue >= 0 && hue < 1) {
      [r, g, b] = [value, x, 0];
    } else if (hue >= 1 && hue < 2) {
      [r, g, b] = [x, value, 0];
    } else if (hue >= 2 && hue < 3) {
      [r, g, b] = [0, value, x];
    } else if (hue >= 3 && hue < 4) {
      [r, g, b] = [0, x, value];
    } else if (hue >= 4 && hue < 5) {
      [r, g, b] = [x, 0, value];
    } else if (hue >= 5 && hue <= 6) {
      [r, g, b] = [value, 0, x];
    }
    const m = value - value;
    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)]
  }