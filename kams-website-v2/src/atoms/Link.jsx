import "../index.css"
export default function Link({
    text="default",
    img=null,
}) {

    return (
        <button
            type="submit"
            className="landing-link font-medium text-white text-xl" 
        >
            {
                !img ? 
                 text  :
                <span className="inline-block">
                    <img src={img}>
                    
                    </img>
                    { text }
                </span>
                
            }
            
        </button>
    );
}