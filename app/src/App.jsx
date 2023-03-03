import Slider from "./components/Slider";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

import hsv2rgb from "./utils/hsv2rgb";
import rgb2hsv from "./utils/rgbtohsv";

const socket = io("http://192.168.100.4:80");

function App() {

  socket.on("connect", () => {
    socket.emit("getColor", (response) => {
      console.log('response', response[0])
      let [r,g,b] = response[0]
      var [server_hue, _, server_brightness] = rgb2hsv(r,g,b);
      console.log("server", server_hue, server_brightness);
      setHue(server_hue);
      setBrightness(server_brightness);
    });
  });

  const [hue, setHue] = useState(-1);
  const [brightness, setBrightness] = useState(-1);

  useEffect(() => {
    if (hue >= 0 && brightness >= 0) {
      let [red,green,blue] = hsv2rgb(hue, brightness)
      socket.emit("setColor", [red,green,blue]);
    }
  }, [hue, brightness]);

  const sliders = (
    <div className="sliders__container">
      <Slider
        value={hue}
        max={359}
        onInput={(value) => setHue(value.target.value)}
      />
      <Slider
        value={brightness}
        className={"brightness"}
        max={100}
        onInput={(value) => setBrightness(value.target.value)}
      />
    </div>
  );

  return <div>{sliders}</div>;
}

export default App;
