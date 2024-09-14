"use client";

import { useUser } from "@propelauth/nextjs/client";

const Page = () => {
  const { user } = useUser();
  const org = user?.getOrg("8796bd3f-ef8b-44e6-a6f8-136fc20a96cd");
  if (org?.hasPermission("dash")) {
    return <button>Create Ticket</button>;
  }

  return null;
};

export default Page;
