import board
import neopixel

from colorsys import hsv_to_rgb

pixels = neopixel.NeoPixel(board.D18, 86)


def hsv2rgb(h,s,v):
    return tuple(round(i * 255) for i in hsv_to_rgb(h,s,v))


def setColor(hue, brightness):
    # print(f'hue: {hue}\t brightness {brightness}')
    rgb = hsv2rgb(int(hue) / 360, 1, int(brightness) / 100)
    # print(rgb)
    pixels.fill((rgb))
