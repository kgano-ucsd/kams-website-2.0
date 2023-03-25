import "../index.css"
export default function Link({
    text="default"
}) {

    return (
        <button
            type="submit"
            className="landing-link font-medium text-white text-xl" 
        >
            { text }
        </button>
    );
}