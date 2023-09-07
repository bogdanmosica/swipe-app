import * as z from 'zod';

export const userNameSchema = z.object({
  firstName: z.string().min(3).max(32),
  lastName: z.string().min(3).max(32),
  username: z.string().min(3).max(32).optional(),
});
