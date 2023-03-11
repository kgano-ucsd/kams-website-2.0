import "../index.css"


export default function Hello() {

    return (
        <div className="grid place-items-center h-full">
            <h1 className="text-3xl font-semibold font-display text-white" >
                {"hi, my name is kameron gano and i study "}
                <span className="magic">
                    <span className="magic-text">
                        computer engineering
                    </span>
                </span>
                {" at uc san diego."}
            </h1>
        </div>
    )
}