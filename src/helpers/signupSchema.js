import * as Yup from 'yup';

/**   
    * A helper function that checks the value
    * of the input in the registration form.
*/

const signupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    firstName: Yup.string()
        .min(4, 'First name must be at least 4 characters')
        .required('First name is required'),
    lastName: Yup.string()
        .min(4, 'Last name  must be at least 4 characters')
        .required('Last name is required'),
    password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Password  is required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default signupSchema;