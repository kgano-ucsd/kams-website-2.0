import BgWrapper from "./atoms/BgWrapper";
import Banner from "./atoms/Banner";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <BgWrapper>
      <Banner />
      <div className="h-[77%]">
        <Hello>
          <p className="text-center text-white text-lg">
            i like to build cool things.
          </p>
        </Hello>
      </div>
      </BgWrapper>
      <div>
        TEST
      </div>
    </div>
    
  );
}

export default App;
