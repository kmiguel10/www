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
          date: string
          distance: number
          id: number
          month: number | null
          source: string | null
          year: number | null
        }
        Insert: {
          date: string
          distance: number
          id: number
          month?: number | null
          source?: string | null
          year?: number | null
        }
        Update: {
          date?: string
          distance?: number
          id?: number
          month?: number | null
          source?: string | null
          year?: number | null
        }
        Relationships: []
      }
      running_monthly: {
        Row: {
          id: number
          month: number
          monthyear: number
          total_distance: number
          year: number
        }
        Insert: {
          id?: number
          month: number
          monthyear: number
          total_distance: number
          year: number
        }
        Update: {
          id?: number
          month?: number
          monthyear?: number
          total_distance?: number
          year?: number
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
