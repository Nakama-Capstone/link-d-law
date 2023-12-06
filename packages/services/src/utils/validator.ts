import { ZodSchema, ZodError } from "zod"

export const validateWithZod = (
  schema: ZodSchema,
  data: {
    [key: string]: string | number | boolean | object | undefined
  }
) => {
  let isError = false;
  const errors = []
  let parsed = {}

  try {
    parsed = schema.parse(data)
  } catch (error) {
    if (typeof error === "object" && error instanceof ZodError) {
      isError = true
      errors.push(
        ...error.errors.map((e) => {
          return {
            key: `${e.path.join(".")}`,
            message: `input ${e.message}`,
          };
        })
      )
    }
  }

  return {
    errors,
    isError,
    parsed,
  };
};
