"use client";
import { resetPasswordAction } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
  data: "",
};

const ResetButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      className="bg-blue-800 text-blue-50 w-full py-2 px-4 rounded-md"
      aria-disabled={pending}
    >
      {pending ? "Submitting" : "Continue"}
    </button>
  );
};

const ResetPasswordForm = () => {
  const [state, formAction] = useFormState(resetPasswordAction, initialState);
  return (
    <form
      action={formAction}
      className="w-3/6 flex flex-col items-center gap-10"
    >
      <div className="w-2/3">
        <div className="font-bold text-3xl">Forgot password</div>
        <p>Enter your email to reset your password</p>
      </div>
      <div className="w-2/3">
        <label htmlFor="Email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="border-solid border-[1px] focus:outline-blue-500 border-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>
      <div className="w-2/3">
        <ResetButton />
        <p aria-live="polite" role="status" id="show-alert" className="mt-2 text-center">
          {`${state?.data} ${state?.message}`}
        </p>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
