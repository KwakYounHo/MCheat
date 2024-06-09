import { z } from "zod";

const schema = z.object({
  searchScammer: z
    .string()
    .min(2, {
      message: "Input value must be at least 2 characters",
    })
    .regex(/^[^\-]*$/, { message: "Please enter it without hyphen ('-')" }),
});

type SchemaType = z.infer<typeof schema>;

export { schema, type SchemaType };
