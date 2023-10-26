import { Home, FileText, FolderGit2, Ghost, PenLine } from "lucide-react";

import type { Page } from "@/lib/types/site";

/**
 * Pages displayed on personal website
 * navigation bar.
 */
export const NAVBAR_PAGES: Page[] = [
  { name: "Home", slug: "/", icon: <Home /> },
  { name: "Resume", slug: "/resume", icon: <FileText /> },
  { name: "Projects", slug: "/projects", icon: <FolderGit2 /> },
  { name: "About Me", slug: "/about", icon: <Ghost /> },
  { name: "Blog", slug: "/blog", icon: <PenLine /> },
];
