'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as z from 'zod';

import { SWIPE_BACKEND_URL, cn } from '../../lib/utils';
import { userNameSchema } from '../../lib/validations/user';
import { buttonVariants } from '@swipe-app/shared-ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@swipe-app/shared-ui';
import { Input } from '@swipe-app/shared-ui';
import { Label } from '@swipe-app/shared-ui';
import { toast } from '@swipe-app/shared-ui';
import { Icons } from '../icons';
import { UserState } from '../../contexts/main-store';
import useMainStoreContext from '../../hooks/use-main-store-context';

type UserNameFormProps = React.HTMLAttributes<HTMLFormElement>;

type FormData = z.infer<typeof userNameSchema>;

export function UserNameForm({ className, ...props }: UserNameFormProps) {
  const router = useRouter();
  const { user } = useMainStoreContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      lastName: user?.lastName || '',
      firstName: user?.firstName || '',
    },
  });
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [updateUser, setUpdateUser] = React.useState<UserState>(user);

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const response = await axios.patch(
      `${SWIPE_BACKEND_URL}/users/${user.id}`,
      { ...data },
      { withCredentials: true }
    );

    setIsSaving(false);

    if (!response) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your name was not updated. Please try again.',
        variant: 'destructive',
      });
    }
    setUpdateUser({ ...response.data });
    toast({
      description: 'Your name has been updated.',
    });

    router.refresh();
  }

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Name</CardTitle>
          <CardDescription>Please enter your full name.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="firstName">
              First name
            </Label>
            <Input
              id="firstName"
              className=""
              size={32}
              placeholder="First name..."
              {...register('firstName')}
            />
            {errors?.firstName && (
              <p className="px-1 text-xs text-red-600">
                {errors.firstName.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="lastName">
              Last name
            </Label>
            <Input
              id="lastName"
              className=""
              size={32}
              placeholder="Last name..."
              {...register('lastName')}
            />
            {errors?.lastName && (
              <p className="px-1 text-xs text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <button
            type="submit"
            className={cn(buttonVariants(), className)}
            disabled={isSaving}
          >
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
