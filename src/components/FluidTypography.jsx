import { makeStyles, Typography } from '@material-ui/core';
import customTheme from 'theme/customTheme';
import PropTypes from 'prop-types';

/** FluidTypography - a wrapper for Typography of material ui.
 *  Override some of the styles of the based typography.
 * @param {text} - the text that will be displayed.
 * @param {variant} - property of typography.
 * @param {minSize} - minimum size to achieve fluid typography.
 * @param {size} - preferred size to achieve fluid typography.
 * @param {maxSize} - maximum size to achieve fluid typography.
 * @param {fontWeight} - weight of the typography. Also has a default value.
 * @param {color} - font color. Also has a default value.
 */

const FluidTypography = ({ text, ...props }) => {
  const {
    variant = 'subtitle1',
    minSize,
    size,
    maxSize,
    color = customTheme.palette.tertiary.dark,
    fontWeight = 400,
  } = props;

  const useStyles = makeStyles((theme) => ({
    fluid_header: {
      fontSize: `clamp(${minSize}, ${size}, ${maxSize})`,
      fontWeight: fontWeight,
      color: color,
    },
  }));
  const classes = useStyles();
  return (
    <Typography className={classes.fluid_header} variant={variant}>
      {text}
    </Typography>
  );
};

FluidTypography.propTypes = {
  text: PropTypes.any.isRequired,
  variant: PropTypes.string,
  minSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default FluidTypography;
