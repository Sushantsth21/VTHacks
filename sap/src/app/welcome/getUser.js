import { getUser } from "@propelauth/nextjs/server/app-router";

const WelcomeMessage = async () => {
  const user = await getUser();

  if (user) {
    return <div>Hello {user.firstName}!</div>;
  } else {
    return <div>Please log in to be welcomed</div>;
  }
};
export default WelcomeMessage;
