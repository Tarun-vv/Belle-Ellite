import Login from "../_components/Login";
import { signIn } from "../_lib/auth";

function page() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}

export default page;
