import { z } from "zod";

const schema = z.object({
  searchScammer: z.string().min(2, {
    message: "Input value must be at least 2 characters",
  }),
});

type SchemaType = z.infer<typeof schema>;

export { schema, type SchemaType };
