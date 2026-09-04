export async function submitLead(values) {
  if (import.meta.env.DEV) {
    console.info('[заявка]', values);
  }

  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true };
}
