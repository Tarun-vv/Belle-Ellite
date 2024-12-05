import { auth } from "@/app/_lib/auth";
import Login from "../Login";
import SignOut from "./SignOut";

async function Username() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <>
          <img src={session?.user?.image} />
          <span>{session?.user?.name}</span>
        </>
      ) : (
        "Login"
      )}
    </div>
  );
}

export default Username;
