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
                        stanford brains in silicon
                    </h1>
                    {"\n"}
                    <div className="flex flex-col gap-8 h-1/2 font-medium text-white text-2xl p-3 ">
                            <div className="h-1/3">
                                worked on a neuromorphic chip for edge learning and knowledge retrieval
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                implemented dendrocentric computation with multi-gate ferroelectric field-effect transistors {"(fefets) "} 
                                for edge detection of spatiotemporal sequences
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                fit and stabilized circuit compatible of a fefet
                            </div>
                            <div className="h-1/3">
                                gained experience with industry standard circuit development tools
                            </div>
                            <div className="h-1/3">
                                presented work as a poster for the 2024 stanford electrical engineering
                                research experience for undergraduates
                            </div>
                    </div>

                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test flex flex-col">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        uc san diego
                    </h1>
                    {"\n"}
                    <div className="flex flex-col gap-8 h-1/2 font-medium text-white text-2xl p-3 ">
                            <div className="h-1/3">
                                worked on a grid-free model of presynaptic diffusion for use in neuromorphic hardware
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                led work of software simulation for two-compartment, conductance-based neurons featured
                                in our lab's integrate-and-fire-array transciever
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                designed an algorithm for chip-in-the-loop spiking neural network training without
                                backpropagation
                            </div>
                            <div className="h-1/3">
                                trained machine learning models for quality control testing graphene field-effect transistors
                            </div>
                            <div className="h-1/3">
                                analyzed EEG-data collected from a memory study paradigm designed in lab
                            </div>
                    </div>

                </div>
            </div>
            <div className="w-1/3 p-2">
                <div className="test flex flex-col">
                    <h1 className=" font-bold text-white text-4xl p-3">
                        salk institute
                    </h1>
                    {"\n"}
                    <div className="flex flex-col gap-8 h-1/2 font-medium text-white text-2xl p-3 ">
                            <div className="h-1/3">
                                pioneering data-driven diagnostic methods for childhood mental health issues with data
                                from the adolescent brain cognitive development study {" ABCD"}
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                designed a modular supervised and unsupervised learning pipeline for subtyping adolescent
                                depression with mri data
                            </div>
                            {"\n"}
                            <div className="h-1/3">
                                used industry standard practices to clean and organize multi-modal mri data
                            </div>
                            <div className="h-1/3">
                                identified isolation forest as an effective technique for outlier detection in 
                                multi-modal mri data
                            </div>
                    </div>

                </div>
            </div>
          </section>
    );
}