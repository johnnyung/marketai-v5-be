export function ok(data, meta = {}) {
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
export function err(message, details = {}) {
    return {
        success: false,
        status: "error",
        error: message,
        details,
    };
}
