import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from 'yup';
import { AuthValues } from "../../../types";
import AuthProvider from "../../providers/AuthProvider";


const LoginHOC = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const [loading, setLoading] = useState(false)
        const { _login } = AuthProvider()

        const loginValidationSchema = yup.object().shape({
            username: yup
                .string()
                .min(3, 'Username must be at least 3 characters')
                .required('Username address is required'),
            password: yup
                .string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        })

        const { handleChange, handleBlur, values, errors, handleSubmit, touched } = useFormik({
            initialValues: {
                password: '',
                username: '',
            },
            onSubmit: values => onSubmit(values),
            validationSchema: loginValidationSchema
        })

        const onSubmit = async (values: AuthValues) => {
            setLoading(true)
            await _login(values)
            setLoading(false)
        }

        return <Com
            {...props}
            loginValidationSchema={loginValidationSchema}
            loading={loading}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            handleSubmit={handleSubmit}
            touched={touched}
        />
    }
    return wrapper
}

export default LoginHOC
