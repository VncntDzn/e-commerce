import { makeStyles, Typography } from '@material-ui/core';
import customTheme from 'theme/customTheme';

/** FluidTypography - a wrapper for Typography of material ui.
 *  Override some of the styles of the based typography.
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
    <>
      <Typography className={classes.fluid_header} variant={variant}>
        {text}
      </Typography>
    </>
  );
};

export default FluidTypography;
