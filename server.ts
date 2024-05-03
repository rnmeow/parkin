import html from 'htm'

import { indexBody, indexHead } from './pages/index.tsx'

Deno.serve((req) =>
  html({
    ...indexHead,
    body: indexBody(req),
  })
)
