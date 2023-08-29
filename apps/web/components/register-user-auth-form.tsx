'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '../lib/utils';
import { registerUserAuthSchema } from '../lib/validations/auth';
import { buttonVariants } from '@swipe-app/shared-ui';
import { Input } from '@swipe-app/shared-ui';
import { Label } from '@swipe-app/shared-ui';
import { toast } from '@swipe-app/shared-ui';
import { Icons } from './icons';
import { signUp } from '../lib/session';

type RegisterUserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof registerUserAuthSchema>;

export function RegisterUserAuthForm({
  className,
  ...props
}: RegisterUserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerUserAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signUpResult = await signUp('email', {
      email: data.email.toLowerCase(),
      password: data.password,
    });

    setIsLoading(false);

    if (!signUpResult.ok) {
      if (signUpResult.error) {
        router.push('/login');
        return toast({
          //title: `Error status: ${signUpResult.error.status}`,
          description: signUpResult.error.message,
          variant: 'destructive',
        });
      } else {
        return toast({
          title: 'Something went wrong.',
          description: 'Your sign in request failed. Please try again.',
          variant: 'destructive',
        });
      }
    }

    router.push(searchParams?.get('from') || '/dashboard');
    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    });
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="confirmPassword">
              Repeat Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder=""
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setIsGitHubLoading(true);
          //signIn('github');
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{' '}
        Github
      </button>
    </div>
  );
}
