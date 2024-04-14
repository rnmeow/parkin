import html from 'htm'

import { PageBody, PageHead } from './src/page.tsx'

// deno-lint-ignore no-explicit-any
Deno.serve((req) => html({ ...PageHead as any, body: PageBody(req) }))
