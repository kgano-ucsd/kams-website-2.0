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
                   className="h-full w-full relative">
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
          <section 
            style=
            {{backgroundImage: `url(${about})`,
              backgroundRepeat: false,
              backgroundSize: "cover"}}
              className="w-full h-full relative"
          >

          </section>
        </div>                 
  );
}

export default App;
