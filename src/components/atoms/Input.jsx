import colors from "./colors";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ borderColor: colors.border }}
      className="p-2 border rounded w-full focus:ring-1 focus:ring-secondary"
    />
  );
};

export default Input;
