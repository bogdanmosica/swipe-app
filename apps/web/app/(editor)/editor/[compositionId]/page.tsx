import PlayerNavContainer from 'apps/web/components/player-nav-container';

interface EditorPageProps {
  params: { compositionId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  return (
    <div className="container flex h-full w-full flex-col items-center justify-center">
      <PlayerNavContainer />
    </div>
  );
}
