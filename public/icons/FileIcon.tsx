const FileIcon = ({ className = "" }) => {
    return (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M14.5 2.5H7.25C6.00736 2.5 5 3.50736 5 4.75V19.25C5 20.4926 6.00736 21.5 7.25 21.5H16.75C17.9926 21.5 19 20.4926 19 19.25V8.75L14.5 2.5Z" />
      </svg>
    );
  };
  
  export default FileIcon;