import { HONEYPOT_FIELD } from '../lib/spam-check';

// Hidden from people (off-screen, not focusable, hidden from screen readers)
// but present in the DOM, where form-filling bots find and fill it. Uses
// off-screen positioning rather than display:none, which some bots skip.
// Uncontrolled on purpose: the form reads it from the DOM at submit time.
export default function HoneypotField() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
    >
      <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
