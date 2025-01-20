const PlusIcon = ({ className = "", color = "white" }) => {
    return (
      <svg
        className={`w-5 h-5 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        style={{ verticalAlign: 'middle' }}
      >
        <circle cx="12" cy="12" r="10" stroke={color}></circle>
        <path d="M12 8v8m4-4H8" stroke={color} strokeLinecap="round"></path>
      </svg>
    );
  };
  
  export default PlusIcon;
  