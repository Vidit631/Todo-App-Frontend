const TickIcon = ({ className = "", color = ""}) => {
    return (
        <svg
            className={className}
            fill="none"
            stroke={color}
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="M5 13l4 4L19 7"></path>
        </svg>
    );
};

export default TickIcon;