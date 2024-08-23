import React from "react";
import Input from "../components/form/input";
import Title from "../components/title";
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schema/newPassword";

interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

const Password: React.FC = () => {
  const onSubmit = async (values: PasswordFormValues, actions: any) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
    console.log("values", values);
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik<PasswordFormValues>({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Password</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="btn-primary mt-4" type="submit">
        Update
      </button>
    </form>
  );
};

export default Password;
