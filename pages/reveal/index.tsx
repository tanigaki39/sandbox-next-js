import { NextPage } from "next";

const Reveal: NextPage = () => (
  <div>
    <h1>Reveal</h1>
    <div style={{ backgroundColor: "gray" }}>
      <div>component 1</div>
      <div style={{ marginTop: "500px", backgroundColor: "red" }}>
        component 2
      </div>
    </div>
  </div>
);

export default Reveal;
