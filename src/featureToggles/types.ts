export interface Toggle {
  id?: number;
  is_on: boolean;
}

export interface FeatureToggle extends Toggle {
  label: string;
  description: string;
  created_at?: Date | null;
  updated_at?: Date | null;
  // toggle_date: string | null;
  // toggled_by: string | null;
}
