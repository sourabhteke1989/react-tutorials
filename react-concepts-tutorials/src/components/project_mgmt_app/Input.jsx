export default function Input({ label, isTextArea, ref, ...props }) {
    return (
        <p className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">{label}</label>
            {isTextArea ? (
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition"
                    {...props}
                    ref={ref}
                />
            ) : (
                <input
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition"
                    {...props}
                    ref={ref}
                />
            )}
        </p>
    );
}