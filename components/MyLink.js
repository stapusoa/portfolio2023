import Link from 'next/link';
import PropTypes from 'prop-types';

const MyLink = ({ href, children, ...props }) => (
  <Link href={href} {...props}>
    <a className="my-link">{children}</a>
  </Link>
);

MyLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyLink;
