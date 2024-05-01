import html from "htm";

import { indxBody, indxHead } from "./pages/index.tsx";

Deno.serve((req) => html({ ...indxHead, body: indxBody(req) }));
