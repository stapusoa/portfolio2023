// components/MyLink.js
import Link from 'next/link';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MyLink = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <div className="my-link" role="link" tabIndex="0" {...props}>
      {children}
      <ArrowForwardIosIcon style={{ fontSize: 'inherit', marginLeft: '4px' }} />
    </div>
  </Link>
);

MyLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyLink;
