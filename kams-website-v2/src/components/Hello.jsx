import "../index.css"


export default function Hello({ children }) {

    return (
        <div className=" grid place-items-center h-full ">
            <div className="flex flex-col">
            <div>
                <h1 className="text-5xl font-semibold font-display text-white" >
                    {"my name is kameron gano and i study "}
                    <span className="magic">
                        <span 
                        style={{letterSpacing: "1px"}}
                        className="magic-text">
                            computer engineering
                        </span>
                    </span>
                    {" at uc san diego."}
                    
                </h1>
            </div>
                <div className="">
                        { children }
                </div>
            </div>
        </div>
    )
}