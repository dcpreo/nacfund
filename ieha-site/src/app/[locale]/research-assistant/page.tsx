import { Chat } from '@/components/research-assistant/Chat';

export const metadata = {
  title: 'Research Assistant — materielart.tech',
  description: 'AI-powered research assistant with knowledge of the materielart collection.',
};

export default function ResearchAssistantPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Research Assistant</h1>
      <p className="text-muted-foreground mb-8">
        Explore the collection through conversation. Ask about artworks, artists,
        movements, and institutions.
      </p>
      <Chat />
    </div>
  );
}
