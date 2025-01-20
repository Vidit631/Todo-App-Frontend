const DeleteIcon = ({ className = "", color = "" }) => {
    return (
      <svg
        className={`${className}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        viewBox="0 0 24 24"
        style={{ verticalAlign: 'middle' }}
      >
        <path d="M3 6h18m-2 0v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3-3V4a2 2 0 012-2h4a2 2 0 012 2v2m5 0H5"></path>
      </svg>
    );
  };
  
  export default DeleteIcon;