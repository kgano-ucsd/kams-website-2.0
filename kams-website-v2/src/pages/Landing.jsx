import Banner from "../atoms/Banner";
import Hello from "../components/Hello";
import { Typewriter } from 'react-simple-typewriter';
import landing from "./landing.svg"


export default function Landing() {

    return(
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
    );
}