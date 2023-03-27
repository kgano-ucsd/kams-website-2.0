import "../index.css"
export default function Link({
    text="default",
    img=null,
}) {

    return (
        <button
            type="submit"
            className="landing-link font-medium text-white text-xl grid place-items-center" 
        >
            {
                !img ? 
                 text  :
                
                <div className="flex flex-row inline-block p-1">
                    <div className="inline w-1/3"> 
                        <img className="w-10 h-10" src={img} alt=""></img>
                    </div>
                    <div className="grid place-items-center w-2/3 px-1 text-center">{text}</div>
               </div>
                
            }
        </button>
    );
}