export const findPlaceholders = (template: string) => {
  const placeholders: string[] = [];
  const regex = /{{(.*?)}}/g;

  let match;
  while ((match = regex.exec(template)) !== null) {
    const placeholder = match[1].trim();
    if (!placeholders.includes(placeholder)) {
      placeholders.push(placeholder);
    }
  }

  return placeholders;
};
