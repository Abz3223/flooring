// Server-side spam signals for the lead forms.
//
// These FLAG a submission, they never drop it. A flagged lead is still
// emailed, with "[Likely spam]" in the subject, so a Gmail filter can file it
// away from the inbox. A false positive costs a look in a folder; a dropped
// real lead costs a job. Revisit dropping only after the flags have been
// checked against real leads for a few weeks.
//
// Cloudflare Turnstile would be stronger, but it needs a widget created in the
// owner's Cloudflare account and its secret stored in Netlify first. A
// half-configured Turnstile setup fails closed and rejects every lead, so it
// is deliberately not wired in until the keys exist.

/** Name of the hidden field. Deliberately meaningless so browser autofill
 *  (which keys on names like "website", "company", "address") leaves it alone. */
export const HONEYPOT_FIELD = 'hp_ref_7'

/** Real people take longer than this to reach and fill a form. */
export const MIN_FILL_MS = 2000

export interface SpamCheckInput {
  phone?: unknown
  message?: unknown
  elapsed_ms?: unknown
  [HONEYPOT_FIELD]?: unknown
}

export function spamSignals(body: SpamCheckInput): string[] {
  const reasons: string[] = []

  const trap = body[HONEYPOT_FIELD]
  if (typeof trap === 'string' && trap.trim() !== '') {
    reasons.push('hidden trap field was filled in (people cannot see it)')
  }

  // Our forms always send elapsed_ms. Its absence means the request did not
  // come through the site's forms (a script posting straight to the API).
  const elapsed = Number(body.elapsed_ms)
  if (body.elapsed_ms === undefined || body.elapsed_ms === null || !Number.isFinite(elapsed)) {
    reasons.push('not sent from the website form')
  } else if (elapsed < MIN_FILL_MS) {
    reasons.push(`submitted ${(elapsed / 1000).toFixed(1)}s after the form loaded`)
  }

  // Canadian/US numbers are 10 digits, or 11 with a leading 1.
  if (typeof body.phone === 'string' && body.phone.trim() !== '') {
    const digits = body.phone.replace(/\D/g, '')
    if (!/^1?\d{10}$/.test(digits)) {
      reasons.push(`phone is not a North American number (${body.phone.trim()})`)
    }
  }

  if (typeof body.message === 'string' && /https?:\/\/|www\./i.test(body.message)) {
    reasons.push('message contains a link')
  }

  return reasons
}
