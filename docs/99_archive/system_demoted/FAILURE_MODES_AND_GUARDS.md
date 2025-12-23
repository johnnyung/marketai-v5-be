# Failure Modes & Guards

## Common Failure
Contract mismatch → type cascade → runtime crash

## Mandatory Fix Protocol
1. Fix contract
2. Fix hook normalization
3. Fix widget props
4. Rebuild locally

## Guardrail: Express Response Is Immutable
Never attach custom properties to Express Response.

Forbidden:
- res.success
- res.statusCode(500)

Reason:
- Response.statusCode is a number
- Express typing is locked under ESM

Correct:
- res.status(500).json({ success: false, error: "..." })

If TypeScript complains about Response:
STOP.
Do NOT extend Response.
Fix the call site.
