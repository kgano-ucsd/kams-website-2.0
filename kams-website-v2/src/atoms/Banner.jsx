
export default function Banner() {

    return (
        <>
            <div className="w-screen h-1/8 flex flex-row p-4">
            <div className="flex-grow border-box">
                    <h1 className="text-xl font-semibold font-display ml-1 p-4 text-left text-white">
                        kameron gano
                    </h1>
                </div>
                <div className="w-1/6 text-center ">
                    <h2 className="text-lg font-medium font-display p-4 text-white">
                        about
                    </h2>
                </div>
                <div className="w-1/6 text-center ">
                    <h2 className="text-lg font-medium font-display p-4 text-white">
                        projects
                    </h2>
                </div>
                
            </div>
        </>
    )
}