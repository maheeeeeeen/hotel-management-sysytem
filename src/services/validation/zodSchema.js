import z from "zod";

export const logInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must be at least 5 characters"),
});

export const SignInSchema = z.object({
  name: z.string().min(1, "Name Is required"),
  city: z.string().min(1, "City Is required"),
  number: z.coerce.number().min(1, "Contact Number Is required"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must be at least 5 characters"),
});
export const addRoomSchema = z.object({
  roomNumber: z.number().min(1, "Room number required"),
  description: z.string().min(1, "Description Required"),
  floor: z.number().min(1, "Floor number required"),
  maxGuests: z.number().min(1, "Max guest required"),
  mealPlan: z.string().min(1, "Meal Plan required"),
  type: z.string().min(1, "Type required"),
  price: z.number().min(1, "Price required"),
  status: z.string().min(1, "Status required"),
  amenities: z.string().min(3, "amenities required"),
  // ImageUrl: z.string().min(1, "logo URL is required"),
});

export const FeedbackSchema = z.object({
  comment: z.string().min(1, "Comment required"),
  rating: z.coerce
    .number({
      required_error: "Rating is required",
      invalid_type_error: "Rating must be a number",
    })
    .min(1, "Rating must be greater than 0")
    .max(5, "Rating cannot be more than 5"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
