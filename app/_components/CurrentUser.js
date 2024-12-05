import { auth } from "../_lib/auth";

async function CurrentUser() {
  const session = await auth();
  console.log(session);
  return <div>{session?.user?.name}</div>;
}

export default CurrentUser;
