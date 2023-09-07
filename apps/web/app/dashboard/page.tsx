import { Metadata } from 'next';
import ProtectedRoute from '../../components/protected-route';
import { DashboardShell } from '../../components/shell';
import { DashboardHeader } from '../../components/header';
import { EmptyPlaceholder } from '../../components/empty-placeholder';
import { PostCreateButton } from '../../components/post-create-button';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default function DashboardPage() {
  const compositions = [];
  return (
    <ProtectedRoute redirectPath="dashboard">
      <DashboardShell>
        <DashboardHeader
          heading="Compositions"
          text="Create and manage compositions."
        />
        <div>
          {compositions?.length ? (
            <div className="divide-y divide-border rounded-md border">
              {/* {posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))} */}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="post" />
              <EmptyPlaceholder.Title>
                No compositions created
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                You don&apos;t have any compositions yet. Start creating
                content.
              </EmptyPlaceholder.Description>
              <PostCreateButton variant="outline" />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
