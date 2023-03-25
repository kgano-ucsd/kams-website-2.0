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
                <span className="flex flex-row">
                    <img src={img} className="w-1/3">
                    
                    </img>
                    <span className="w-2/3">
                        { text }
                    </span>
                </span>
                
            }
            
        </button>
    );
}