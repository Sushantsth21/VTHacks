"use client";

import { useUser } from "@propelauth/nextjs/client";
import DashboardA from "./_dashComp/admin";
import DashboardB from "./_dashComp/owner";
import DashboardC from "./_dashComp/member";
import Header from "../_components/header"; // Adjust the path as necessary
import Footer from "../_components/footer"; // Adjust the path as necessary

const DashboardPage = () => {
  const { user } = useUser();
  const org = user?.getOrg("8796bd3f-ef8b-44e6-a6f8-136fc20a96cd");

  const renderContent = () => {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
