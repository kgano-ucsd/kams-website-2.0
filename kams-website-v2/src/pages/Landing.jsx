import Banner from "../atoms/Banner";
import Hello from "../components/Hello";
import { Typewriter } from 'react-simple-typewriter';
import landing from "./landing.svg"
import Link from "../atoms/Link";
import github from "./github-mark-white.svg";


export default function Landing() {

    return(
        <section 
                //  style=
                //  {{backgroundImage: `url(${landing})`,
                //    backgroundRepeat: false,
                //    backgroundSize: "cover"}} 
                  className="h-full w-full relative p-8 bg-[#121212] flex flex-col"
          >
            <div className="h-1/8">
              <Banner/>
            </div>
            <div className="h-[77%]">
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
              </div>
              <div className="h-fit">
                  <div className="flex flex-row">
                    <div className="w-1/3 align-right p-3">
                      <Link text="my github" img={github}/>
                    </div>
                    <div className="w-1/3 align-center p-3">
                      <Link text="my github" />
                    </div>
                    <div className="w-1/3 align-left p-3">
                      <Link text="my github" />
                    </div>
                  </div>  
                </div>
          </section>
    );
}