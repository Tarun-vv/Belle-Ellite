import { login } from "@/app/actions";

function SupabaseLogin() {
  return (
    <form action={login}>
      <div>
        <label>Email</label>
        <input type="email" name="email" defaultValue="test@example.com" />
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" defaultValue="test@123" />
      </div>

      <button>Log in </button>
    </form>
  );
}

export default SupabaseLogin;
