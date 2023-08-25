import PropTypes from "prop-types";
const Button = ({ children,className }) => {
  return (
    <button type="button" className={`transition bg-[hsl(198,60%,50%)] hover:bg-[hsl(176,68%,64%)] text-white font-bold py-2.5 max-w-xs px-2 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
