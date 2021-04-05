import * as Yup from 'yup';
/**   
    * A helper function that checks the value
    * of the input in the login form.
*/
const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(24, 'Password can be maximum 24 characters')
        .required('Password is Required'),
});

export default signinSchema;