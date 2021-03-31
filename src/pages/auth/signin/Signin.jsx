import { Card, CardContent, Button, Box } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { signinSchema } from 'helpers';
import { Field, FieldIcon } from 'components';
import { MainLayout } from 'layouts';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import customTheme from 'theme/customTheme';
const Signin = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      height: '75vh',
    },
    cardContainer: {
      width: '80vw',
      height: 'fit-content',
      [theme.breakpoints.up('sm')]: {
        width: '30rem',
      },
    },
    buttonStyle: {
      '&:hover': {
        color: customTheme.palette.secondary.main,
      },
    },
  }));

  const classes = useStyles();
  const history = useHistory();
  return (
    <MainLayout>
      <Box className={classes.container}>
        <Card raised className={classes.cardContainer}>
          <CardContent>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={signinSchema}
              onSubmit={() => {
                alert('nice');
              }}
            >
              <Form>
                <Field name='email' type='email' placeholder='Email' />
                <FieldIcon name='password' placeholder='Password' />
                <Box mt={3}>
                  <Button
                    color='secondary'
                    variant='contained'
                    fullWidth
                    type='submit'
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            </Formik>
          </CardContent>
          <Box mx={1} display='flex' justifyContent='space-between'>
            <Button
              className={classes.buttonStyle}
              onClick={() => history.push('/auth/signup')}
            >
              Create Account?
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => history.push('/forgot-password')}
            >
              Forgot Password?
            </Button>
          </Box>
        </Card>
      </Box>
    </MainLayout>
  );
};

Signin.propTypes = {};

export default Signin;
