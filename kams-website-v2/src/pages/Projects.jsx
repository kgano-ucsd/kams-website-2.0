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
                        stanford aimi
                    </h1>
                    {"\n"}
                    <div className="flex flex-col gap-8 h-1/2 font-medium text-white text-2xl p-3 ">
                            <div className="h-1/3">
                                led ml project for a group of high school students @ stanford aimi center. 
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                trained models to classify endotracheal tube {"(ett)"} distances in 
                                chest ct scans as normal or abnormal.
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                used nlp to extract ett distances from radiology reports associated with
                                each ct scan.
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