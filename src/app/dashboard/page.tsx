import { getAllCardInfoDetails } from "@/actions/CreatePost.action";
import { buttonVariants } from "@/components/ui/button";

import { BadgePlus, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const data = await getAllCardInfoDetails();
  console.log(data);
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div className="mb-5">
        <Link
          className={`${buttonVariants()} gap-5 `}
          href={"/dashboard/create"}
        >
          Create a card
          <BadgePlus />
        </Link>
      </div>
      <div></div>
    </main>
  );
};

export default DashboardPage;
