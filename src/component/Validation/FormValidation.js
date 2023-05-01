import React from "react";
import { useForm } from "react-hook-form";
import { yupresolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required("email is required"),
    name: yup.string().required("name is required"),
    password: yup.string().required("password is required"),
  })
  .required();
function FormValidaton() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupresolver(schema),
  });
  const onSubmit = (data) => {
    const { email, name, password } = data;
    if (email && password && name) {
      console.log(email, password, name);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          type="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : false}
        />
        <p>{errors.email?.message?.toString()}</p>
        <label>name</label>
        <input
          type="name"
          {...register("name")}
          aria-invalid={errors.name ? "true" : false}
        />
        <p>{errors.name?.message?.toString()}</p>
        <label>password</label>
        <input
          type="password"
          {...register("password")}
          aria-invalid={errors.password ? "true" : false}
        />
        <p>{errors.password?.message?.toString()}</p>
      </form>
    </div>
  );
}

export default FormValidaton;
