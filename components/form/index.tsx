import { useForm, SubmitHandler } from "react-hook-form";

type InputProps = {
  name: string;
  email: string;
  title?: string;
  text: string;
}

export const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputProps>();
  return (
    <form>
      <label>Name</label>
      <input
        {...register("name" , { required: true })}
      />
      <label>Email</label>
      <input
        {...register("email", { required: true })}
      />
      <label>Text</label>
      <input
        {...register("text", { required: true })}
      />
      <input type="submit" />
    </form>
  )
}