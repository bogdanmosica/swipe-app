//'use server';
import 'server-only';
import { Metadata } from 'next';

import ProtectedRoute from '../../components/protected-route';
import { DashboardShell } from '../../components/shell';
import { DashboardHeader } from '../../components/header';
import { EmptyPlaceholder } from '../../components/empty-placeholder';
import { CompositionCreateButton } from '../../components/composition-create-button';
import axios from 'axios';
import { SWIPE_BACKEND_URL } from '../../lib/utils';
import { CompositionItem } from '../../components/composition-item';
import { CompositionType } from '../../types';
import { cookies } from 'next/headers';

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};
async function getUserCompositions() {
  const cookie = await getCookie('token');
  console.error({ cookies: cookies().getAll(), cookie });
  const res = await axios
    .get<CompositionType[]>(`${SWIPE_BACKEND_URL}/abstract-compositions`, {
      headers: {
        Cookie: cookies().toString(),
      },
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error({ cookies: cookies().getAll(), cookie });
      console.error(error);
      return null;
    });
  return res;
}

const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default async function DashboardPage() {
  const compositions = await getUserCompositions();
  return (
    <ProtectedRoute redirectPath="dashboard">
      <DashboardShell>
        <DashboardHeader
          heading="Compositions"
          text="Create and manage compositions."
        />
        <div
          className={`w-full flex flex-col ${'items-start'} gap-4 ${
            compositions?.length === 0 ? 'my-0 mx-auto' : ''
          }`}
        >
          {compositions && compositions?.length > 0 && (
            <CompositionCreateButton variant="outline" />
          )}
          {compositions?.length ? (
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {compositions.map((composition) => (
                <CompositionItem
                  className="divide-y divide-border rounded-md border"
                  key={composition.id}
                  composition={composition}
                />
              ))}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="composition" />
              <EmptyPlaceholder.Title>
                No compositions created
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                You don&apos;t have any compositions yet. Start creating
                content.
              </EmptyPlaceholder.Description>
              <CompositionCreateButton variant="outline" />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
