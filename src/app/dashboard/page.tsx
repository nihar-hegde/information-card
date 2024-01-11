import { buttonVariants } from "@/components/ui/button";
import { BadgePlus, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <main className="flex items-center justify-center p-24">
      <div>
        <Link
          className={`${buttonVariants()} gap-5 `}
          href={"/dashboard/create"}
        >
          Create a card
          <BadgePlus />
        </Link>
      </div>
    </main>
  );
};

export default DashboardPage;
