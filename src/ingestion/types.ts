export interface IngestionContext {
  tickerId?: string;
  symbol?: string;
  // flexible payload to support pipeline modules without mocks
  [key: string]: any;
}

export interface IngestionResult { module: string; status: "success" | "fail" | "partial"; itemsFetched: number; itemsWritten: number; errors?: string[]; }
export interface IngestionModule { name: string; category: string; run(ctx: IngestionContext): Promise<IngestionResult>; }
