"use server";
import { db } from "@/lib/db";
import { InputSchema } from "@/lib/validators";
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
    return { success: "Card Created Succesfully" };
  } catch (error) {
    console.log(error);
  }
};
