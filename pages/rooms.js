import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, handleIsOn, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights handleIsOn={handleIsOn} lights={lights} />
    </>
  );
}

{
  /* <Lights handleIsOn={handleIsOn} lights={lights} /> */
}
