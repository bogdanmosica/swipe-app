import * as React from 'react';
import Link from 'next/link';

import { MainTestimonialsItem } from '../../types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@swipe-app/shared-ui';

type HomeFeatureItemProps = {
  children?: React.ReactNode;
} & MainTestimonialsItem;

export function HomeTestimonialsItem({
  authorName,
  companyName,
  description,
  children,
}: HomeFeatureItemProps) {
  return (
    <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
      <CardHeader>
        <CardTitle>{authorName}</CardTitle>
        <CardDescription className="italic">{companyName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
