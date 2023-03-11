
export default function BgWrapper({ children }) {

    return (
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-black h-screen w-screen">
            { children }
        </div>
    )
}