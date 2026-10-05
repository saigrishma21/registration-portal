import { useState } from "react";
import { useFormik } from "formik";
import FormInput from "./FormInput";
import Message from "./Message";
import registrationSchema from "../validation/registrationSchema";
import { registerUser } from "../services/api";

function RegistrationForm() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: registrationSchema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setMessage("");
        setMessageType("");

        const userData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password
        };

        const result = await registerUser(userData);

        console.log("API Response:", result);

        setMessage("Registration successful!");
        setMessageType("success");

        resetForm();
      } catch (error) {
        console.error(error);

        setMessage("Registration failed. Please try again.");
        setMessageType("error");
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="form-container">
      <h1>Create Account</h1>

      <p className="subtitle">
        Register your account to get started
      </p>

      <Message type={messageType}>
        {message}
      </Message>

      <form onSubmit={formik.handleSubmit}>

        <FormInput
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter 10 digit phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone}
          touched={formik.touched.phone}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />

        <button
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting
            ? "Registering..."
            : "Register"}
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm;