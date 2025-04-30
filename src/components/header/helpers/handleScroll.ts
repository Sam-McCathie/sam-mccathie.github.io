export const handleScroll = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 70;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - offset,
      behavior: "smooth",
    });
  }
};
