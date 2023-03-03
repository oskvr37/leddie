import board
# import neopixel


class Leds:
    def __init__(self) -> None:
        self.current_color = (127, 127, 127)
        self.pixels = neopixel.NeoPixel(board.D18, 86)
        self.pixels.fill(self.current_color)

    def setColor(self, rgb):
        self.current_color = rgb
        self.pixels.fill(self.current_color)
