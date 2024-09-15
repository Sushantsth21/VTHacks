"use client";

import { useUser } from "@propelauth/nextjs/client";
import DashboardA from "./_dashComp/admin";
import DashboardB from "./_dashComp/owner";
import DashboardC from "./_dashComp/member";

const DashboardPage = () => {
  const { user } = useUser();
  const org = user?.getOrg("8796bd3f-ef8b-44e6-a6f8-136fc20a96cd");

  if (!org) {
    return (
      <div>
        Access Denied: You are not a member of the required organization.
      </div>
    );
  }

  if (org.hasPermission("admin_dash")) {
    return <DashboardA />;
  }

  if (org.hasPermission("owner_dash")) {
    return <DashboardB />;
  }

  if (org.hasPermission("member_dash")) {
    return <DashboardC />;
  }

  return <div>You don't have permission to view any dashboards.</div>;
};

export default DashboardPage;
