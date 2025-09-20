'use client';
import { useEffect, useState } from 'react';

// Payload esperado de /api/auth/session
export type AuthUser = {
  sub: string;
  username: string;
  name?: string;
  avatar?: string;
  provider: 'discord';
};

type SessionState = 'loading' | 'authed' | 'unauth';

export function useSession() {
  const [data, setData] = useState<AuthUser | null>(null);
  const [status, setStatus] = useState<SessionState>('loading');

  useEffect(() => {
    fetch('/api/auth/session', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json: { ok: boolean; user: AuthUser }) => {
        if (json.ok) {
          setData(json.user);
          setStatus('authed');
        } else {
          setStatus('unauth');
        }
      })
      .catch(() => setStatus('unauth'));
  }, []);

  return { data, status };
}
