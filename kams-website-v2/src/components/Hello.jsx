import "../index.css"


export default function Hello() {

    return (
        <div className="grid place-items-center h-full">
            <h1 className="text-3xl font-semibold font-display text-white" >
                {"hi, my name is "}
                <span className="magic">
                <span className="magic-text"> kameron gano </span> 
                </span>
                {" and i study computer engineering at ucsd."}
            </h1>
        </div>
    )
}