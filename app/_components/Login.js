import { signIn } from "../_lib/auth";
import SignOut from "./Navigation/SignOut";

function Login() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}

export default Login;
