'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { CompositionItem } from './composition-item';
import { CompositionType } from '../types';
import { SWIPE_BACKEND_URL, cn } from '../lib/utils';
import { CompositionCreateButton } from './composition-create-button';
import { EmptyPlaceholder } from './empty-placeholder';
import DashboardCompositionListLoadingFallback from './fallbacks/dashboard-fallback';

type DashboardCompositionListProps = {
  className?: string;
};

export async function DashboardCompositionList({
  className,
}: DashboardCompositionListProps) {
  const [compositions, setCompositions] = useState<CompositionType[] | null>(
    null
  );
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get<CompositionType[]>(`${SWIPE_BACKEND_URL}/abstract-compositions`, {
        withCredentials: true,
      })
      .then((response) => setCompositions(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      className={cn(
        className,
        'w-full flex flex-col items-start gap-4',
        compositions && compositions?.length === 0 ? 'my-0 mx-auto' : ''
      )}
    >
      {!compositions && <DashboardCompositionListLoadingFallback />}
      {compositions && compositions?.length > 0 && (
        <CompositionCreateButton variant="outline" />
      )}
      {compositions && compositions?.length > 0 && (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {compositions.map((composition) => (
            <CompositionItem
              className="divide-y divide-border rounded-md border"
              key={composition.id}
              composition={composition}
            />
          ))}
        </div>
      )}
      {compositions && compositions?.length === 0 && (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="composition" />
          <EmptyPlaceholder.Title>
            No compositions created
          </EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any compositions yet. Start creating content.
          </EmptyPlaceholder.Description>
          <CompositionCreateButton variant="outline" />
        </EmptyPlaceholder>
      )}
    </div>
  );
}
