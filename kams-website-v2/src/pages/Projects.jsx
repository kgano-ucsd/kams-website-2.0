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
              className="flex flex-row p-6 w-full h-full relative"
          >
            <div className="w-1/3 p-2">
                <div className="test">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        stanford aimi
                    </h1>
                    {"\n"}
                    <div className="font-medium text-white text-2xl p-3">
                        {"i was a student lead for the 2023 summer research internship \
                        at the stanford aimi center. \
                        here, i led to group of high school students to train ml models \
                        that classified and predicted the placement of endotracheal tubes \
                        with respect to the carina using chest ct scans."}
                    </div>
                    {"\n"}
                    <h1 className="font-bold text-white text-3xl p-3">
                        {"awards"}
                        <div className="font-medium flex flex-row">
                        
                        </div>
                    </h1>
                    {"\n"}
                    <h1 className="font-medium text-white text-3xl p-3">
                        github repo
                    </h1>
                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        oloren chemengine
                    </h1>
                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        treehacks 2023
                    </h1>
                </div>
            </div>
          </section>
    );
}