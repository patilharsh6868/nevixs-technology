// Placeholders for content that needs confirmation from the Nevixs team.
// Anything wrapped in todo() is skipped when rendering, so it never appears on the live site.
export const todo = (note) => ({ todo: `{{TODO: ${note}}}` });
export const isTodo = (value) => Boolean(value && typeof value === "object" && "todo" in value);
export const withoutTodos = (items) => items.filter((item) => !isTodo(item));
