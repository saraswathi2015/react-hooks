import React from "react";
import useForm from "./useForm";

const valitate = (values) => {
  const { errors } = {};

  if (!values.username) errors.username = "user name is required";
  if (!values.password) errors.password = " password name is required";
  return errors;
};

function LoginForm() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { usename: "", password: "" },
    valitate
  );
  console.log("values", values);
  console.log("errors", errors);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeHolder="username"
      />
      {errors && <p>{errors.username}</p>}
      <input
        type="password"
        value={values.password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      {errors.password && <p>{errors.password}</p>}
    </form>
  );
}

export default LoginForm;
