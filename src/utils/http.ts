export interface ApiSuccess<T = any> {
  success: true;
  status: "ok";
  data: T;
  meta: {
    fetchedAt: string;
    [key: string]: any;
  };
}

export interface ApiError {
  success: false;
  status: "error";
  error: string;
  details?: any;
}

export function ok<T = any>(data: T, meta: Record<string, any> = {}): ApiSuccess<T> {
  return {
    success: true,
    status: "ok",
    data,
    meta: {
      fetchedAt: new Date().toISOString(),
      ...meta,
    },
  };
}

export function err(message: string, details: any = {}): ApiError {
  return {
    success: false,
    status: "error",
    error: message,
    details,
  };
}
