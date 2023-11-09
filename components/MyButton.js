// components/MyButton.js
import PropTypes from 'prop-types';

const MyButton = ({ onClick, children, variant = 'primary', ...props }) => (
  <button
    className={`button ${variant}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

MyButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default MyButton;
