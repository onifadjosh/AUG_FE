import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Formm = () => {
    let formik = useFormik({
        initialValues:{
            firstName:'',
            lastName: '',
            email: '',
            password: ''
        },

        onSubmit:(values)=>{
            console.log(values)
        },

        validationSchema: yup.object({
            firstName: yup.string().required('first name is required'),
            lastName: yup.string().required('last name is required'),
            email: yup.string().required('email is required').email('email invalid'),
            password: yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character'),
        })



    })

    // console.log(formik.values)
    // console.log(formik.errors)
    console.log(formik.touched)
    
  return (
    <div>
        <input type="text" name='firstName'  placeholder='first name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
       {formik.touched.firstName? <small className='text-danger'>{formik.errors.firstName}</small>:''}
        <input type="text" name='lastName'  placeholder='last name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <small className='text-danger'>{formik.errors.lastName}</small> <br />
        <input type="email" name='email'  placeholder='email'onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <small className='text-danger'>{formik.errors.email}</small> <br />
        <input type="password" name='password'  placeholder='password'onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <small className='text-danger'>{formik.errors.password}</small> <br />

        <button type='submit' onClick={formik.handleSubmit}>submit</button>
    </div>
  )
}

export default Formm