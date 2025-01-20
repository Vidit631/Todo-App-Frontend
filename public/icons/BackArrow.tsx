const BackArrow = ({ className = "", color = "" }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M19 12H5m0 0l7 7m-7-7l7-7"></path>
    </svg>
  );
};

export default BackArrow;