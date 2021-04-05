import * as Yup from 'yup';

/**
 * A helper function that checks the value
 * of the input in the forgot password form.
 */

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default forgotPasswordSchema;
