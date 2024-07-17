import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="flex min-h-[23vh]   justify-center absolute bottom-10 items-center">
      <form className="flex  gap-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          type="text"
          className="text-base rounded-md font-semibold p-1 outline-none"
          placeholder="name"
        />
        <input
          {...register("email")}
          type="text"
          className="text-base rounded-md font-semibold p-1 outline-none"
          placeholder="email"
        />
        <input
          {...register("image")}
          type="text"
          className="text-base rounded-md font-semibold p-1 outline-none"
          placeholder="img url"
        />
        <input
          className="rounded-md px-5 text-white font-semibold py-1 bg-blue-500"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
