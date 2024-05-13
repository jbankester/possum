import { useState } from "react";
import "./App.css";
import Drawer from "./components/drawer/Drawer";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const doli = () => {
    let lis = [];
    for (let x = 0; x < 100; x++) {
      lis.push(<li>{x}</li>);
    }
    return lis;
  };
  return (
    <>
      <button onClick={() => setDrawerOpen(true)}>Open Drawer</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ul>{doli()}</ul>
      </div>
      <Drawer
        isOpen={drawerOpen}
        onClose={() => {
          console.log("on close");
          setDrawerOpen(false);
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>this is drawer content</div>
          <input type="text"></input>
          <button>button</button>
        </div>
      </Drawer>
    </>
  );
}

export default App;
