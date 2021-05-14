import { Popper, Card, CardContent } from '@material-ui/core';

const SearchMenu = ({ anchorEl, onClose }) => {
  return (
    <Popper
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => onClose()}
      style={{ marginTop: '0.2rem', border: '3px solid red' }}
    >
      <Card raised>
        <CardContent>HI</CardContent>
      </Card>
    </Popper>
  );
};

SearchMenu.propTypes = {};

export default SearchMenu;
