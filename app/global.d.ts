import { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;
  type runMonth = {
    month: string;
    distance: number;
  };
}
