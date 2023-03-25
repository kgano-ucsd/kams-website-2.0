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
                <div className="inline-block">
                 <img className="w-12 h-12 inline" src={img} alt=""></img>
                 <span className="inline">{text}</span>
               </div>
                
            }
            
        </button>
    );
}