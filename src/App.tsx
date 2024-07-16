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
        {/* < - 3 informações legais com flex e justify, collum-> */}
      </div>
    </div>
  );
}

export default App;
