import about from "../images/about.svg"
import "../index.css";

export default function Projects() {

    return(
        
        <section 
            id="projects"
            style=
            {{backgroundImage: `url(${about})`,
              backgroundRepeat: false,
              backgroundSize: "cover"}}
              className="flex flex-row p-10 gap-6 w-full h-full relative"
          >
            <div className="w-1/3 p-2">
                <div className="test flex flex-col">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        stanford research
                    </h1>
                    {"\n"}
                    <div className="flex flex-col gap-8 h-1/2 font-medium text-white text-2xl p-3 ">
                            <div className="h-1/3">
                                worked on a neuromorphic chip for edge learning and knowledge retrieval
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                implemented dendrocentric computation with multi-gate ferroelectric field-effect transistors {"(fefets)"}
                                for edge detection of spatiotemporal sequences
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                fit and stabilized circuit compatible of a fefet
                            </div>
                            <div className="h-1/3">
                                gained experience with industry standard circuit development tools
                            </div>
                    </div>

                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        oloren chemengine
                    </h1>
                </div>
            </div>
            <div className="w-1/3 p-2 py-4">
                <div className="test">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        treehacks 2023
                    </h1>
                </div>
            </div>
          </section>
    );
}