import { getUserOrRedirect } from "@propelauth/nextjs/server/app-router";
const Billing = async () => {
  const user = await getUserOrRedirect();
  if (!user.userAssignedRole()?.hasPermission("dash")) {
    return <div>You do not have permission to view billing information</div>;
  } else {
    return <div>Billing</div>;
  }
};

export default Billing;
