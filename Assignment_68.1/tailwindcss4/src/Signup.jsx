import React from 'react';
import Input from './Input';
import { Formik,Form } from 'formik';
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Signup(){

    const signupSchema=Yup.object().shape({
        Fullname:Yup.string().required("Full name is required"),
        email:Yup.string().email("Invalid email").required("UserName is required"),
        Username:Yup.string().required("Username is required"),
        password:Yup.string()
        .min(6,"Password must be at least 6 characters")
        .required("password is required"),

        confirmpassword:Yup.string()
        .oneOf([Yup.ref("password"),null],"Password must match")
        .required("confirm password is required")
    });
    function signup(values)
    {
        console.log("Signing up page",values.Fullname,values.email,values.Username,values.password,values.confirmpassword)
    }
    // formik
    // const {handleSubmit,values,handleChange}=useFormik({
    //     initialValues:{
    //         Fullname:"",
    //         email:"",
    //         Username:"",
    //         password:"",
    //         confirmpassword:"",
    //     },
    //     validationSchema:signupSchema,
    //     onSubmit:signup,
    // });
    const  initialValues={
            Fullname:"",
            email:"",
            Username:"",
            password:"",
            confirmpassword:"",
        }
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-700">
            <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={signup}
            validateOnMount
            >
            <Form className="flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-white text-xl">Create your Account Now</h1>
                    
                    {/* Full Name */}
            <div className="flex items-center border border-white bg-blue-500 px-2 py-1 rounded">
                <FaUser className="text-white mr-2" />
                <Input
                label="Enter your full name"
                type="text"
                required
                name="Fullname"
                placeholder="Full Name"
                id="Fullname"
                className="bg-blue-500 flex-1 placeholder-black focus:outline-none"
                />
            </div>
                    
                   
       {/* Email */}
      <div className="flex items-center border border-white bg-blue-500 px-2 py-1 rounded">
        <MdEmail className="text-white mr-2" />
        <Input
          label="Enter a Email"
          type="email"
          required
          name="email"
          placeholder="Email"
          id="email"
          className="bg-blue-500 flex-1 placeholder-black focus:outline-none"
        />
      </div>
                        
      {/* Username */}
      <div className="flex items-center border border-white bg-blue-500 px-2 py-1 rounded">
        <FaUser className="text-white mr-2" />
        <Input
          label="Enter a user Name"
          type="text"
          required
          name="Username"
          placeholder="Username"
          id="Username"
          className="bg-blue-500 flex-1 placeholder-black focus:outline-none"
        />
      </div>

      {/* Password */}
      <div className="flex items-center border border-white bg-blue-500 px-2 py-1 rounded">
        <FaLock className="text-white mr-2" />
        <Input
          label="Enter password"
          type="password"
          required
          name="password"
          placeholder="Enter password"
          id="password"
          className="bg-blue-500 flex-1 placeholder-black focus:outline-none"
        />
      </div>
                        
 {/* Confirm Password */}
      <div className="flex items-center border border-white bg-blue-500 px-2 py-1 rounded">
        <FaLock className="text-white mr-2" />
        <Input
          label="Enter your confirm password"
          type="password"
          required
          name="confirmpassword"
          placeholder="Confirm password"
          id="confirmpassword"
          className="bg-blue-500 flex-1 placeholder-black focus:outline-none"
        />                  
                </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="border px-3 py-1 border-white bg-white rounded-md mt-5" type="submit">Signup</button>
                </div>    
            </Form>
            </Formik>
        </div>
    )
};

export default Signup;