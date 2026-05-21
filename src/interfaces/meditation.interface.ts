export interface IMeditation {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  duration_min: number;
}

export interface IMeditationListResponse {
  data: {
    meditations: IMeditation[];
  };
  status: string;
}
