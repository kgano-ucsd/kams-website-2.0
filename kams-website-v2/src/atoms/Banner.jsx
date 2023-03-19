import "../index.css"


export default function Banner() {

    return (
        <>
            <div className="flex flex-row p-1">
            <div className="flex-grow border-box">
                    <h2 
                    style={{fontFamily: "Lobster"}}
                    className="text-3xl font-semibold font-display text-left text-white"
                    >
                        kameron gano
                    </h2>
                </div>
                <div className="w-1/6 text-center p-1">
                    <h2 className="transform text-xl font-medium font-display text-white hover:transition duration-500 hover:font-semibold hover:scale-100">
                        <a href="#about"> 
                            about
                        </a>
                    </h2>
                </div>
                <div className="w-1/6 text-center p-1">
                    <h2 className="transform text-xl font-medium font-display text-white hover:transition duration-500 hover:font-semibold hover:scale-100">
                        <a href="">
                            projects
                        </a>
                    </h2>
                </div>
                
            </div>
        </>
    )
}