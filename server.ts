import htm from 'htm'

import { indexBody, indexHead } from './pages/index.tsx'

Deno.serve((req) =>
  htm({
    ...indexHead,
    body: indexBody(req),
  })
)
