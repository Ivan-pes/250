/**
 * Отправка заявки из формы.
 *
 * ВАЖНО: сейчас письма никуда не уходят — функция только имитирует запрос,
 * чтобы форма была рабочей на демо. Подключить приём заявок можно за пару минут,
 * например через Formspree (или свой обработчик на сервере):
 *
 *   const response = await fetch('https://formspree.io/f/ВАШ_КОД', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
 *     body: JSON.stringify(values),
 *   });
 *   if (!response.ok) throw new Error('Не удалось отправить заявку');
 *   return response.json();
 */
export async function submitLead(values) {
  if (import.meta.env.DEV) {
    // видно в консоли браузера — удобно проверять, что форма собирает нужное
    console.info('[заявка]', values);
  }

  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true };
}
