export interface Toggle {
  id?: number;
  is_on: boolean;
}

export interface FeatureToggle extends Toggle {
  value: string;
  description?: string;
  created_at?: Date | null;
  modified_at?: Date | null;
  toggled_by?: string | null;
}