import about from "./about.svg"

export default function About() {

    return(
        <section 
            style=
            {{backgroundImage: `url(${about})`,
              backgroundRepeat: false,
              backgroundSize: "cover"}}
              className="w-full h-full relative"
          >
              <h1 style={{fontFamily: "Lobster", fontStyle: "normal"}} className="text-6xl text-left text-white font-semibold relative ">
                  about
              </h1>
          </section>
    );
}