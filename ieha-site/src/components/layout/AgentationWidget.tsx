'use client';

import { Agentation } from 'agentation';

export function AgentationWidget() {
  return (
    <Agentation
      endpoint="http://localhost:4747"
      onSessionCreated={(sessionId) => console.log('Session started:', sessionId)}
    />
  );
}
