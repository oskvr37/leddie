import Slider from "./components/Slider";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://192.168.100.4:80");

function App() {
  const [hue, setHue] = useState(270);
  const [brightness, setBrightness] = useState(20);

  useEffect(() => {
    console.debug(hue, brightness);
    socket.emit("color", [hue, brightness]);
  }, [hue, brightness]);

  return (
    <div>
      <div className="sliders__container">
        <Slider
          value={hue}
          max={360}
          onInput={(value) => setHue(value.target.value)}
        />
        <Slider
          value={brightness}
          className={"brightness"}
          max={100}
          onInput={(value) => setBrightness(value.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
