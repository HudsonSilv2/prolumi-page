import { Header } from "./components/header";
import { Info } from "./components/info";
import { Slide } from "./components/slides";

function App() {
  return (
    <div className="">
      <Header />

      <Slide />
      <div>
        <Info />
      </div>
    </div>
  );
}

export default App;
