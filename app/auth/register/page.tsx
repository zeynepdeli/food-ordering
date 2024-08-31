"use client";

import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/input";
import Title from "../../components/title";
import { registerSchema } from "../../../Schema/register";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const onSubmit = async (values, actions) => {
    console.log("Submitted values:", values); 

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
        values
      );
      if (res.status === 201) {
        toast.success("User created successfully");
      }
      console.log(res);

      actions.resetForm();
    } catch (err) {
      toast.error(err.response?.data.message || "An error occurred");
      console.error("Error during registration:", err.response?.data || err.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Your Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Register</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              name={input.name} // `name` özelliğini iletin
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              errorMessage={input.errorMessage}
              touched={input.touched}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">REGISTER</button>
          <Link href="/auth/login">
            <span className="text-sm underline cursor-pointer text-white">
              Do you have an account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
