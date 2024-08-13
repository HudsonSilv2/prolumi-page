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
        {/* < - 3 informações legais com flex e justify, collum-> */}
      </div>

      <Parce />
    </div>
  );
}

export default App;
