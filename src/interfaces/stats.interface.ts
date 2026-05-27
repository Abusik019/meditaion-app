export interface IStat {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  date: string;
  duration_min: number;
  feeling_calm: number;
  feeling_relax: number;
  feeling_focus: number;
  feeling_anxiety: number;
}

export interface ISummary {
  total_calm: number;
  total_relax: number;
  total_focus: number;
  total_anxiety: number;
  total_minutes: number;
}

export interface IPostStatsResponse {
  data: {
    stat: IStat;
  };
}

export interface IFetchStatsResponse {
  data: {
    stats: IStat[];
    summary: ISummary;
  };
  status: string;
}
