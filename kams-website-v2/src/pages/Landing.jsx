import Banner from "../atoms/Banner";
import Hello from "../components/Hello";
import { Typewriter } from 'react-simple-typewriter';
import landing from "./landing.svg"
import Link from "../atoms/Link";
import github from "./github-mark-white.svg";
import linkedin from "./linkedin-square.png"


export default function Landing() {

    return(
        <section 
                //  style=
                //  {{backgroundImage: `url(${landing})`,
                //    backgroundRepeat: false,
                //    backgroundSize: "cover"}} 
                  className="flex flex-col h-full w-full relative p-8 bg-[#121212] "
          >
            <section className="h-1/8">
              <Banner/>
            </section>
            <div className="h-full grid place-items-center">
              <div className="grid grid-rows-2 gap-2 place-items-center">
                  <Hello>
                    <p className="text-center text-white text-3xl">
                      {"i like "} 
                      <span className="magic">
                        <span className="magic-text">
                          <span className="font-normal">
                          <Typewriter
                            words={[
                                    'hwe and swe.', 
                                    'ai and ml.',
                                    'building cool things.' 
                                  ]}
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                          />
                          </span>
                        </span>
                      </span>
                    </p>
                  </Hello>
                  <div className="">
                    <div className="flex flex-row">
                      <div 
                        className=" px-5">
                        <Link text="my github" img={github}/>
                      </div>
                      <div className=" px-5">
                        <Link text="linkedin" img={linkedin}/>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
                
              
          </section>
    );
}