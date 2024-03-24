export const replacePlaceholders = (
  template: string,
  placeholders: { key: string; value: string }[]
): string => {
  let output = template;
  placeholders.forEach((placeholder) => {
    output = output.replace(
      new RegExp(`{{${placeholder.key}}}`, "g"),
      placeholder.value
    );
  });

  return output;
};
