import { Card, CardContent, Button, Box, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { signupSchema } from 'helpers';
import { Field, FieldIcon, Spinner } from 'components';
import { MainLayout } from 'layouts';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
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
  }));

  const classes = useStyles();
  const history = useHistory();
  return (
    <MainLayout>
      <Box className={classes.container}>
        <Spinner />
        <Card raised className={classes.cardContainer}>
          <CardContent>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={signupSchema}
              onSubmit={() => {
                alert('nice');
              }}
            >
              <Form>
                <Field name='email' type='email' placeholder='Email' />
                <Field name='firstName' placeholder='First Name' />
                <Field name='lastName' placeholder='Last Name' />
                <FieldIcon
                  name='password'
                  placeholder='Password'
                  type='password'
                />
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
          <Button
            to='/auth/signin'
            onClick={() => history.push('/auth/signin')}
          >
            Already have an account?
          </Button>
        </Card>
      </Box>
    </MainLayout>
  );
};

Signup.propTypes = {};

export default Signup;
