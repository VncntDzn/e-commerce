import * as Yup from 'yup';

/**   
    * A helper function that checks the value
    * of the input in the product form.
*/

const productSchema = Yup.object().shape({
    productName: Yup.string()
        .required('Product Name is required'),
    brand: Yup.string()
        .required('Brand is required'),
    price: Yup.number()
        .positive()
        .required('Price is required'),
    stock: Yup.number()
        .positive()
        .required('Stock is required'),

});

export default productSchema;