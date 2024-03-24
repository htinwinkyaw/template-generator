export const toPascalCase = (input: string): string => {
  const spacedText = input.split("_");
  const joinedText = spacedText.join(" ");

  return joinedText
    .replace(/[a-zA-Z0-9]+/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .replace(/[^a-zA-Z0-9\s]/g, "");
};
