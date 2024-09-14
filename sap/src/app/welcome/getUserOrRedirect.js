import { getUserOrRedirect } from "@propelauth/nextjs/server/app-router";

const WelcomeMessage = async () => {
  // If the user is not logged in, they will be redirected to the login page
  const user = await getUserOrRedirect();

  return <div>Hello {user.firstName}!</div>;
};
export default WelcomeMessage;
