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
                <span className="flex flex-row p-1">
                    <img src={img} className="w-1/3">
                    
                    </img>
                    <span className="w-2/3 p-1">
                        <span className="px-1">{ text }</span>
                    </span>
                </span>
                
            }
            
        </button>
    );
}