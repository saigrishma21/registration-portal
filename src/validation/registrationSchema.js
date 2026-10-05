import * as Yup from "yup";

const registrationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must contain 10 digits")
    .required("Phone number is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>_\-]/,
      "Password must contain at least 1 special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password")
});

export default registrationSchema;