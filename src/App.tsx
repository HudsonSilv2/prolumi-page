'use strict';

import { Header } from "./components/header";
import { Info } from "./components/info";
import { Parce } from "./components/parce";
import { Slide } from "./components/slides";
import View3D from "./components/view3d";

function App() {
  return (
    <div className="">
      {/* Header Component */}
      <Header />

      {/* Slide Component */}
      <Slide />

      {/* Info Component */}
      <div className="p-0 m-0">
        <Info />
      </div>

      {/* Parce Component */}
      <Parce />

      {/* Home Component */}
      <View3D />
    </div>
  );
}

export default App;
