import React from 'react';
import Input from './Input';
import { Formik, Form } from "formik";
import * as Yup from "yup";

function ForgotPage() {
  console.log("ForgotPage is running");

  function callForgotPage(values) {
    console.log("Sending data", values.forgotemail, values.forgotpassword);
  }

  const ForgotPageSchema = Yup.object().shape({
    forgotemail: Yup.string().email("Invalid email").required("Email is required"),
    forgotpassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    forgotemail: "",
    forgotpassword: "",
  };

  return (
    <div className="bg-blue-700 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Forgot Password</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={callForgotPage}
          validationSchema={ForgotPageSchema}
          validateOnMount
        >
          <Form>
            <div className="flex flex-col space-y-3">
              <Input
                label="Email"
                type="email"
                id="forgotemail"
                placeholder="Enter your email"
                name="forgotemail"
                required
                className="bg-blue-100 border border-gray-300 px-2 py-1 rounded focus:outline-none"
              />

              <Input
                label="New Password"
                type="password"
                id="forgotpassword"
                placeholder="Enter new password"
                name="forgotpassword"
                required
                className="bg-blue-100 border border-gray-300 px-2 py-1 rounded focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full border border-blue-500 rounded-md px-4 py-2 bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600"
              >
                Reset Password
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ForgotPage;
