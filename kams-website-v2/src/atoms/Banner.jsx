import "../index.css"


export default function Banner() {

    return (
        <>
            <div className="flex flex-row">
            <div className="flex-grow border-box">
                    <h1 
                        style={{fontFamily: "Lobster"}}
                        className="text-2xl font-semibold font-display p-3 text-left text-white">
                        kameron gano
                    </h1>
                </div>
                <div className="w-1/6 text-center ">
                    <h2 className="transform text-lg font-medium font-display p-4 text-white hover:transition duration-500 hover:font-semibold hover:scale-100">
                        <a href="#about"> 
                            about
                        </a>
                    </h2>
                </div>
                <div className="w-1/6 text-center ">
                    <h2 className="transform text-lg font-medium font-display p-4 text-white hover:transition duration-500 hover:font-semibold hover:scale-100">
                        <a href="">
                            projects
                        </a>
                    </h2>
                </div>
                
            </div>
        </>
    )
}