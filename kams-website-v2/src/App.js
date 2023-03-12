import BgWrapper from "./atoms/BgWrapper";
import Banner from "./atoms/Banner";
import Hello from "./components/Hello";
import { Typewriter } from 'react-simple-typewriter'

function App() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <BgWrapper>
      <Banner />
      <div className="h-[77%]">
        <Hello>
          <p className="text-center text-white text-2xl">
            {"i like "} 
            <span className="magic">
              <span className="magic-text">
                <span>
                <Typewriter
                  words={[
                          'being active.', 
                          'cooking food.', 
                          'ai and ml.',
                          'building cool things.' 
                        ]}
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                </span>
              </span>
            </span>
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
