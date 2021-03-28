import { Card, CardContent, Button, Box } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { signinSchema } from 'helpers';
import { Field } from 'components';
import { MainLayout } from 'layouts';
import { makeStyles } from '@material-ui/core/styles';

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
  }));

  const classes = useStyles();

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
                <Field name='password' placeholder='Password' type='password' />
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
        </Card>
      </Box>
    </MainLayout>
  );
};

Signin.propTypes = {};

export default Signin;
