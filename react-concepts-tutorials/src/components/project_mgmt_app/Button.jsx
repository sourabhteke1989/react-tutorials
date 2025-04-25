export default function Button({ children, className = "", ...props }) {
    const defaultStyles =
        "px-5 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 transition";
    return (
        <button
            className={`${defaultStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}