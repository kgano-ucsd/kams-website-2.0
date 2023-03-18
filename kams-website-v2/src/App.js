import BgWrapper from "./atoms/BgWrapper";
import Banner from "./atoms/Banner";
import Hello from "./components/Hello";
import { Typewriter } from 'react-simple-typewriter';
import landing from "./layered-waves-haikei.svg"
import about from "./about.svg";



function App() {
  return (
      <div  className="w-screen h-screen overflow-auto">
          <section style=
                 {{backgroundImage: `url(${landing})`,
                   backgroundRepeat: false,
                   backgroundSize: "cover"}} 
                   className="h-full w-full relative p-8 flex flex-col"
          >
            <div className="h-1/8">
              <Banner/>
            </div>
            <div className="h-full">
            <Hello>
              <p className="text-center text-white text-3xl">
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
            </div>
          </section>
          <section 
            style=
            {{backgroundImage: `url(${about})`,
              backgroundRepeat: false,
              backgroundSize: "cover"}}
              className="w-full h-full relative"
          >
              <h1 style={{fontFamily: "Lobster", fontStyle: "normal"}} className="text-6xl text-left text-white font-semibold relative ">
                  about
              </h1>
          </section>
        </div>                 
  );
}

export default App;
