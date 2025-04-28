export const generateNavSections = () => {
  const mainElement = document.querySelector("main");
  if (!mainElement) return [];
  return Array.from(mainElement.children)
    .filter((child) => child.id)
    .map((child) => {
      const capitalizedId =
        child.id.charAt(0).toUpperCase() + child.id.slice(1);

      return {
        text: capitalizedId,
        id: child.id,
        ariaLabel: `Scroll to ${capitalizedId} section`,
      };
    });
};
