import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { login } from './utils';
const Signin = (props) => {
  let history = useHistory();

  const clcik = () => {
    history.push('/protected');
    login();
    console.log(history);
  };
  return (
    <div>
      <h1>hi</h1>
      <button onClick={clcik}>Clcike me</button>
    </div>
  );
};

Signin.propTypes = {};

export default Signin;
