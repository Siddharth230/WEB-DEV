export const Heading = ({ children }) => {
  return (
    <span className="flex justify-center font-bold mb-10">{children}</span>
  );
};

export const Description = ({ children }) => {
  return (
    <span className="flex justify-center text-xs text-gray-400 mb-5">
      {children}
    </span>
  );
};
