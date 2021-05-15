import React from "react";
import {Formik} from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
    <Formik
        initialValues={{email:"",password:""}}
        onSubmit={(values,{setSubmitting})=>{
            setTimeout(()=>{
                console.log("logging the user entered values", values);
                setSubmitting(false);
            },500);
        }}
        validationSchema={Yup.object().shape({
            email:Yup.string()
            .email()
            .required("required"),
            password:Yup.string()
            .required("reuired")
            .min(8,"password is too short")
            .matches(/(?=.*[0-9])/,"password should contain a number")
        })}
    >
        {props=>{
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            }=props;
            return (
                <form>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                            </td>
                            <td>
                                <input 
                                type="text"
                                name="email"
                                placeholder="enter your email id"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email&&touched.email&&"error"}
                                />
                                {errors.email && touched.email &&(
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password</label>
                            </td>
                            <td>
                                <input 
                                type="password"
                                name="password"
                                placeholder="enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password&&touched.password&&"error"}
                                />
                                {errors.password && touched.password &&(
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" disabled={isSubmitting}>
                                    Login
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            );
        }}
    </Formik>
);
export default ValidatedLoginForm;