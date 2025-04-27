export const Button = ({ disabled, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`px-20 py-2 rounded-lg font-semibold mt-5 cursor-pointer ${
        disabled ? "bg-gray-400" : "bg-green-300"
      }`}>
      {children}
    </span>
  );
};
