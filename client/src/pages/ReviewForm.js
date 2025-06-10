import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ReviewForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      comment: "",
      rating: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      comment: Yup.string().min(5, "At least 5 characters"),
      rating: Yup.number().min(1).max(10).required("Required")
    }),
    onSubmit: values => {
      fetch("http://localhost:5555/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      }).then(res => res.json()).then(console.log);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="username" onChange={formik.handleChange} placeholder="Username" />
      {formik.errors.username ? <p>{formik.errors.username}</p> : null}
      <input name="comment" onChange={formik.handleChange} placeholder="Comment" />
      <input name="rating" onChange={formik.handleChange} placeholder="Rating (1-10)" />
      <button type="submit">Submit</button>
    </form>
  );
}
