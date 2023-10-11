import { Home, FileText, PencilRuler, Ghost } from "lucide-react";

import type { Page } from "@/lib/types/site";

/**
 * Pages displayed on personal website
 * navigation bar.
 */
export const NAVBAR_PAGES: Page[] = [
  { name: "Home", slug: "/", icon: <Home /> },
  { name: "Resume", slug: "/resume", icon: <FileText /> },
  { name: "Projects", slug: "/projects", icon: <PencilRuler /> },
  { name: "About Me", slug: "/about", icon: <Ghost /> },
];
