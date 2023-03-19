import about from "./about.svg"

export default function About() {

    return(
        <section 
            id="about"
            style=
            {{backgroundImage: `url(${about})`,
              backgroundRepeat: false,
              backgroundSize: "cover"}}
              className="w-full h-full relative"
          >
              <h1 
                style=
                {{fontFamily: "Lobster", 
                  fontStyle: "normal"}} 
                className="text-6xl text-left text-white font-semibold relative "
              >
                  About 
              </h1>
          </section>
    );
}