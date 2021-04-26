/**
 * CustomPagination - a wrapper for ReactPaginate.
 * @param {node} [containerClassName] - styling for containerClassName.
 * @param {node} [pageClassName] - styling for pageClassName.
 * @param {node} [activeClassName] - styling for activeClassName.
 * @param {Number} [pageCount] - number of pages.
 * @param {function} [handlePageClick] - function to switch pages in pagination.
 */
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const CustomPagination = ({
  containerClassName,
  pageClassName,
  activeClassName,
  pageCount,
  handlePageClick,
}) => {
  return (
    <ReactPaginate
      previousLabel={<ArrowLeftIcon />}
      nextLabel={<ArrowRightIcon />}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      pageClassName={pageClassName}
      containerClassName={containerClassName}
      activeClassName={activeClassName}
    />
  );
};

CustomPagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  containerClassName: PropTypes.node.isRequired,
  pageClassName: PropTypes.node.isRequired,
  activeClassName: PropTypes.node.isRequired,
};

export default CustomPagination;
