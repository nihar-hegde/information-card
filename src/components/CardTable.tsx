import { getAllCardInfoDetails } from "@/actions/CreatePost.action";
import { CardInfoTypes } from "@/types/CardInfoTypes";
import React from "react";

interface Props {
  data: CardInfoTypes[];
}

export const CardTable = async ({ data }: Props) => {
  console.log(data);
  return <></>;
};
