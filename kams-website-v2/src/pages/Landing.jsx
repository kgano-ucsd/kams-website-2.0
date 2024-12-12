import Banner from "../atoms/Banner";
import Hello from "../components/Hello";
import { Typewriter } from 'react-simple-typewriter';
import landing from "../images/landing.svg"
import Link from "../atoms/Link";
import github from "../images/github-mark-white.svg";
import linkedin from "../images/linkedin-square.png"


export default function Landing() {

    return(
        <section 
                 style=
                 {{backgroundImage: `url(${landing})`,
                   backgroundRepeat: false,
                   backgroundSize: "cover"}} 
                  className="flex flex-col h-full w-full relative p-8 bg-[#001220] "
          >
            <div className="h-1/8">
              <Banner/>
            </div>
            <div className="h-[88%] grid place-items-center">
              <div className="grid place-items-center ">
                  <Hello>
                    <p className="text-center text-white text-3xl">
                      {"i like "} 
                      <span className="magic">
                        <span className="magic-text">
                          <span className="font-normal">
                          <Typewriter
                            words={[
                                    'designing hardware.', 
                                    'studying the brain.',
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
                  <div className="py-4">
                    <div className="flex flex-row">
                      <a href = "https://github.com/kgano-ucsd" className="px-5">
                        <Link text="my github" img={github} />
                      </a>
                      <a href = "https://www.linkedin.com/in/kameron-gano-96704a243/" className=" px-5">
                        <Link text="linkedin" img={linkedin} />
                      </a> 
                    </div>
                  </div>
                </div>
              </div>
          </section>
    );
}