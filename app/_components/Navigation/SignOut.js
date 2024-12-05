import { signOut } from "@/app/_lib/auth";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        signOut({ redirectTo: "/" });
      }}
    >
      <button>Sign out shakala</button>
    </form>
  );
}

export default SignOut;
