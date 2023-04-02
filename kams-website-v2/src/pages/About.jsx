import about from "../images/about.svg"
import "../index.css";

export default function About() {

    return(
        <section 
            id="about"
            style=
            {{backgroundImage: `url(${about})`,
              backgroundRepeat: false,
              backgroundSize: "cover"}}
              className="flex flex-row p-6 w-full h-full relative"
          >
            <div className="w-1/3 p-2">
                <div className="test">

                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test">

                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test">

                </div>
            </div>
          </section>
    );
}