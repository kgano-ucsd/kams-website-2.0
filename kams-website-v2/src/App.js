import BgWrapper from "./atoms/BgWrapper";
import Banner from "./atoms/Banner";
import Hello from "./components/Hello";

function App() {
  return (
    <BgWrapper>
      <Banner />
      <div className="h-[77%]">
        <Hello/>
      </div>
    </BgWrapper>
  );
}

export default App;
