import { z } from "zod";

const message = {
  min: (number: number) => `Please enter more than ${number} character`,
  number: (name: string) => `${name} must be a number without space(" ")`,
  either: "Either bank account or mobile number must be entered",
};

const schema = z
  .object({
    name: z.string().min(2, message.min(2)),
    bank_account: z
      .string()
      .min(2, message.min(2))
      .regex(/^[0-9]+$/, { message: message.number("Bank Account") })
      .optional()
      .or(z.literal("")),
    mobile_number: z
      .string()
      .min(2, message.min(2))
      .regex(/^[0-9]+$/, { message: message.number("Mobile Number") })
      .optional()
      .or(z.literal("")),
    place_of_issue_occur: z.string().min(2, message.min(2)),
    detail: z.string().optional(),
  })
  .refine((data) => data.bank_account || data.mobile_number, {
    message: message.either,
    path: ["mobile_number"],
  });
type SchemaType = z.infer<typeof schema>;

export { schema, type SchemaType };
