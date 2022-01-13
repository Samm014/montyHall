import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../model/door";
// import Gift from "../components/Gift";

export default function Home() {

  const [p1, setP1] = useState(new DoorModel(1, false, true));

  return (
    <div style={{display:'flex',margin:'10px 0'}}>
      {/* <Gift /> */}
      <Door door={p1}/>
    </div>
  )
}
