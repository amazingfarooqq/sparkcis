"use server";

import { dbConnect } from "@/lib/database";
import { FORM } from "@/models/form";
import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

export type FormData = z.infer<typeof FormSchema>;

export async function submitContactForm(data: FormData) {
  const result = FormSchema.safeParse(data);

  if (!result.success) {
    throw new Error(JSON.stringify(result.error.flatten().fieldErrors));
  }

  try {
    await dbConnect();
    await FORM.create(result.data);
    return { success: true };
  } catch (error) {
    console.error("Error saving contact:", error);
    return { success: false, errors: { server: ["Failed to save contact. Please try again."] } };
  }
}
