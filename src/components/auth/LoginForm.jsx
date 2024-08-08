import { useForm } from "react-hook-form";
import Field from "../common/Field";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(formSubmit)}
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email address is required.." })}
          type="email"
          id="email"
          name="email"
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          } `}
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required..",
            minLength: {
              value: 8,
              message: "You must fill 8 characters password..",
            },
          })}
          type="password"
          id="password"
          name="password"
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          } `}
        />
      </Field>

      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
