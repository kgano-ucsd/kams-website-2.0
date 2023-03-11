
export default function({ children }) {

    return (
        <>
            <div className="w-screen h-1/8 flex flex-row p-2">
                <div className="w-2/3">
                    <h1 className="text-xl font-semibold font-display p-4 ml-1 text-white">
                        kameron gano
                    </h1>
                </div>
                <div className="w-1/6 grid place-items-center">
                    <h2 className="text-lg font-medium font-display p-4 text-white">
                        about
                    </h2>
                </div>
                <div className="w-1/6 grid place-items-center">
                    <h2 className="text-lg font-medium font-display p-4 text-white">
                        projects
                    </h2>
                </div>
                
            </div>
        </>
    )
}