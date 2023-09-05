import * as z from 'zod';

export const registerUserAuthSchema = z
  .object({
    email: z.string().email().min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(6, { message: 'Password is to short, min 6 characters' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Password is to short, min 6 characters' }),
    isVerified: z.boolean().optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      });
    }
  });

export const loginUserAuthSchema = z.object({
  email: z.string().email().min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password is to short, min 6 characters' }),
});
