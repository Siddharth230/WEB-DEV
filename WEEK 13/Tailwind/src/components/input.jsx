export const Input = ({ onClick, type, placeholder }) => {
  return (
    <span
      onClick={onClick}
      className="bg-blue-400 rounded-lg border border-blue-200 px-5 py-2 my-2">
      <input type={type} placeholder={placeholder} />
    </span>
  );
};
