const Card = ({ title, content, onClick, isActive, classNames, style }: { 
    title: string; 
    content: string; 
    onClick: () => void; 
    isActive: boolean; 
    classNames?: string;
    style?: React.CSSProperties;
}) => {
    const isRed = content === '♥' || content === '♦';
    return (
        <div
            onClick={onClick}
            className={`relative w-[100px] h-[150px] p-2 transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg border border-gray-200 cursor-pointer transform ${isActive ? 'z-50 scale-105' : 'hover:-translate-y-2'} ${classNames}`}
            style={style}
        >
            <div className={`absolute top-1 left-1 text-lg font-bold ${isRed ? 'text-red-600' : 'text-black'}`}>
                {title}
            </div>
            <div className={`absolute top-1 right-1 text-lg font-bold ${isRed ? 'text-red-600' : 'text-black'}`}>
                {content}
            </div>
            <div className={`absolute bottom-1 right-1 text-lg font-bold ${isRed ? 'text-red-600' : 'text-black'}`}>
                {title}
            </div>
            <div className={`absolute bottom-1 left-1 text-lg font-bold ${isRed ? 'text-red-600' : 'text-black'}`}>
                {content}
            </div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl ${isRed ? 'text-red-600' : 'text-black'}`}>
                {content}
            </div>
        </div>
    );
}
export default Card;