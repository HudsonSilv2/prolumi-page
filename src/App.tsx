'use client'

import { Header } from "./components/header";
import { Info } from "./components/info";
import { Parce } from "./components/parce";
import { Slide } from "./components/slides";

function App() {
  return (
    <div className="">
      <Header />

      <Slide />
      <div className="p-0 m-0">
        <Info />
      </div>

      <Parce />
    </div>
  );
}

export default App;
