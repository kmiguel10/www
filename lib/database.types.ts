export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      running: {
        Row: {
          date: string | null
          distance: number | null
          id: number
          source: string | null
        }
        Insert: {
          date?: string | null
          distance?: number | null
          id: number
          source?: string | null
        }
        Update: {
          date?: string | null
          distance?: number | null
          id?: number
          source?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
