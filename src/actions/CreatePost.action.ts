"use server";
import { db } from "@/lib/db";
import { InputSchema } from "@/lib/validators";
import { Divide } from "lucide-react";
import { revalidatePath } from "next/cache";
import z from "zod";

export const CreateCard = async (values: z.infer<typeof InputSchema>) => {
  try {
    const validatedValues = InputSchema.safeParse(values);
    if (!validatedValues.success) {
      return { error: "Invalid Fields!" };
    }
    const {
      imageUrl,
      name,
      description,
      interests,
      githubUrl,
      twitterUrl,
      instagramUrl,
      linkedinUrl,
    } = validatedValues.data;
    await db.infoCard.create({
      data: {
        imageUrl,
        name,
        description,
        interests,
        githubUrl,
        twitterUrl,
        instagramUrl,
        linkedinUrl,
      },
    });
    revalidatePath("/dashboard");
    return { success: "Card Created Succesfully" };
  } catch (error) {
    return { error: "Unable to create card!!!" };
  }
};

export const getAllCardInfoDetails = async () => {
  try {
    const data = await db.infoCard.findMany({});
    return data;
  } catch (error) {
    return { error: "Unable to retrive Card Data!!!" };
  }
};
