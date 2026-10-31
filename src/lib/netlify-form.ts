// Sends a form submission to Netlify Forms.
// Netlify detects the form definitions in public/__forms.html at deploy time;
// submissions then appear under Forms in the Netlify dashboard (with email notifications).
export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string | number | string[] | null | undefined>,
): Promise<boolean> {
  const body = new URLSearchParams();
  body.append("form-name", formName);
  for (const [key, value] of Object.entries(fields)) {
    if (value === null || value === undefined) continue;
    body.append(key, Array.isArray(value) ? value.join(", ") : String(value));
  }
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return res.ok;
  } catch (err) {
    console.error("form submit failed", err);
    return false;
  }
}
