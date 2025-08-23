import React from 'react';
import { Formik,Form } from 'formik';
import { BiCartDownload } from "react-icons/bi";
import * as Yup from "yup";
import {Link} from 'react-router-dom';
import Input from './Input';
import { BiUser, BiLock } from "react-icons/bi";


function Login(){

    console.log("login is running");

    function callLoginApi(values){
        console.log("Sending data",values.email,values.password);
    }

    const LoginSchema=Yup.object().shape({
            // Fullname:Yup.string().required("Full name is required"),
            email:Yup.string().email("Invalid email").required("Email is required"),
            // Username:Yup.string().required("Username is required"),
            password:Yup.string()
            .min(6,"Password must be at least 6 characters")
            .required("password is required"),
    });
    // const{handleSubmit,values,handleChange ,errors,handleBlur,touched } = useFormik({
    //             initialValues:{
    //                 email:"",
    //                 password:"",
    //             },
    //             onSubmit:callLoginApi,
    //             validateOnMount:true,
    //             validationSchema:LoginSchema,
    //         });
    const initialValues={
                    email:"",
                    password:"",
                }
    return(
        <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-700">
            <BiCartDownload className="mb-3 text-6xl sm:text-lg md:text-6xl lg:text-7xl"/>
            <Formik
            initialValues={initialValues}
            onSubmit={callLoginApi}
            validationSchema={LoginSchema}
            validateOnMount
            >  
            <Form >
               <div className="flex flex-col space-y-3">
               
                                        {/* Email Field with Icon */}
                        <div className="flex items-center bg-blue-500 border border-white px-2 py-1 rounded-md">
                        <BiUser className="text-white mr-2" />
                        <Input
                            label="email"
                            type="email"
                            id="email"
                            required
                            placeholder="Email"
                            name="email"
                            className="bg-blue-500 placeholder-black focus:outline-none flex-1"
                        />
                        </div>
                            
                        <div className="flex items-center bg-blue-500 border border-white px-2 py-1 rounded-md mt-3">
                    <BiLock className="text-white mr-2" />
                    <Input
                        label="password"
                        type="password"
                        id="password"
                        required
                        placeholder="Password"
                        name="password"
                        className="bg-blue-500 placeholder-black focus:outline-none flex-1"
                    />
                    </div>
               </div>
               <Link className="text-white"  to="/Forgot">Forgot Password?</Link>
               <div className="mt-10 flex justify-center items-center">
               <button type="submit" className="border border-white rounded-md px-10 py-1 bg-white cursor-pointer ">Login</button>
               </div>
            </Form>
        </Formik>  
        <div className="flex mt-4">
            <Link className="text-white" to="/SigupPage">Don't hava a account register?</Link>
            
        </div>    
        </div>
    )
};
export default Login;