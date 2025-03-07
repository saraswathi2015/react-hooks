import React, { useState } from "react";

const useForm = (initialValue, valitate) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setValues({ ...values, name: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(valitate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
