import BgWrapper from "./atoms/BgWrapper";
import Banner from "./atoms/Banner";
import Hello from "./components/Hello";
import { Typewriter } from 'react-simple-typewriter';
import background from "./layered-waves-haikei.svg"



function App() {
  return (
      <div  className="h-screen w-screen overflow-auto">
          <section style={{backgroundImage: `url(${background})`,
                   backgroundRepeat: false,
                   backgroundSize: "cover"}} className="h-full w-full ">
            <Banner />
            <Hello>
              <p className="text-center text-white text-2xl">
                {"i like "} 
                <span className="magic">
                  <span className="magic-text">
                    <span className="font-normal">
                    <Typewriter
                      words={[
                              'being active.', 
                              'ai and ml.',
                              'building cool things.' 
                            ]}
                      typeSpeed={70}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                    </span>
                  </span>
                </span>
              </p>
            </Hello>
          </section>
          <section className="w-full h-full bg-white">

          </section>
        </div>                 
  );
}

export default App;
