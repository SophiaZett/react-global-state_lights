import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import Lights from "@/components/Lights";

const initialLights = [
  { id: "1", name: "Living Room", isOn: true },
  { id: "2", name: "Kitchen", isOn: true },
  { id: "3", name: "Bedroom", isOn: true },
  { id: "4", name: "Bathroom", isOn: true },
  { id: "5", name: "Garage", isOn: true },
  { id: "6", name: "Porch", isOn: true },
  { id: "7", name: "Garden", isOn: true },
  { id: "8", name: "Office", isOn: true },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  console.log(lights);

  function handleIsOn(lightID) {
    setLights(
      lights.map((light) =>
        light.id === lightID ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }
  function handleLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleIsOn={handleIsOn}
        lights={lights}
        onLightsOff={handleLightsOff}
        onLightsOn={handleLightsOn}
      />
    </Layout>
  );
}
