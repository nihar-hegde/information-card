"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputSchema } from "@/lib/validators";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import { Textarea } from "../ui/textarea";

export const CreateForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      imageUrl: "" || undefined,
      name: "",
      description: "",
      interests: [],
      githubUrl: "" || undefined,
      twitterUrl: "" || undefined,
      instagramUrl: "" || undefined,
      linkedinUrl: "" || undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof InputSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any,
  ) => {
    if (e.key === "Enter" && field.name === "interests") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("interests", {
            type: "required",
            message: "Interest must be less than 15 characters.",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("interests", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("interests");
        }
      } else {
        form.trigger();
      }
    }
  };
  const handleInterestRemove = (interest: string, field: any) => {
    const newInterests = field.value.filter((t: string) => t !== interest);
    form.setValue("interests", newInterests);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image url</FormLabel>
                <FormControl>
                  <Input placeholder="Image Url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-purple-700">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-purple-700">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Interests <span className="text-purple-700">*</span>
                </FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="Enter your interest here and press Enter..."
                      onKeyDown={(e) => handleInputKeyDown(e, field)}
                    />
                    {field.value.length > 0 && (
                      <div className="flex justify-start items-center mt-2.5 gap-2.5">
                        {field.value.map((interest: any) => (
                          <Badge
                            key={interest}
                            className="flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                            onClick={() =>
                              handleInterestRemove(interest, field)
                            }
                          >
                            {interest}
                            <X className="w-4 h-4 cursor-pointer object-contain " />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Github Url</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your GitHub URL here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitterUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter Url</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Twitter URL here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagramUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram Url</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Instagram URL here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Url</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your LinkedIn URL here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
