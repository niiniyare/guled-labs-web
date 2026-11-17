// Shared form submit: posts to the form's action (set via site.formEndpoint)
// as JSON-friendly FormData and reports the result in a live region.
export async function submitForm(form: HTMLFormElement, status: HTMLElement, successMsg: string) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const endpoint = form.getAttribute('action');
  if (!endpoint) {
    // No endpoint configured yet (see src/config/site.ts → formEndpoint).
    status.textContent = `${successMsg} (Preview mode: this form isn't connected yet.)`;
    form.reset();
    return;
  }
  button?.setAttribute('disabled', '');
  status.textContent = 'Sending…';
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(String(res.status));
    status.textContent = successMsg;
    form.reset();
  } catch {
    status.textContent = 'That didn’t send. Check your connection and try again, or message us on WhatsApp.';
  } finally {
    button?.removeAttribute('disabled');
  }
}
