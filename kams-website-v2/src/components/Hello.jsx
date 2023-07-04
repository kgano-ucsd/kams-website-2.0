import "../index.css"


export default function Hello({ children }) {

    return (
        <div className=" grid place-items-center h-full ">
            <div className="flex flex-col">
            <div className="">
                <h1 className="text-5xl font-semibold font-display text-white">
                    hi, i am kameron.
                </h1>
                <h1 className="text-5xl font-semibold font-display text-white" >
                    {"i study "}
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
                <div className="py-4">
                        { children }
                </div>
            </div>
        </div>
    )
}