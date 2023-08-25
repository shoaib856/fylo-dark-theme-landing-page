import PropTypes from "prop-types";

const SocialIcon = ({ d }) => {
  return (
    <a href="#" className="icon-social">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#fff" d={d} />
      </svg>
    </a>
  );
};

export default SocialIcon;

SocialIcon.propTypes = {
  d: PropTypes.string.isRequired,
};
