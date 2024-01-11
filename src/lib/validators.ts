import z from "zod";

export const InputSchema = z.object({
  imageUrl: z.string().url().optional(),
  name: z
    .string()
    .min(1, "Name is Required")
    .min(3, "Name must be at least 3 characters long")
    .max(70, "Name cannot exceed 70 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(3, "Description must be at least 3 characters")
    .max(300, "Description must be less than 300 characters"),
  interests: z
    .array(z.string().min(1).max(15))
    .min(1, "Must have at least 1 interest.")
    .max(6, "Cannot have more than 6 interests."),
  githubUrl: z.string().url("GitHub URL must be a valid URL").optional(),
  twitterUrl: z.string().url("Twitter URL must be a valid URL").optional(),
  instagramUrl: z.string().url("Instagram URL must be a valid URL").optional(),
  linkedinUrl: z.string().url("LinkedIn URL must be a valid URL").optional(),
});
