export const scrollIntoView = (elName: string) => {
  const offet = elName === 'home' ? 100 : 70;
  const elPos = document.getElementById(elName)?.getBoundingClientRect().top;
  if (elPos) {
    const offsetPos = elPos + window.pageYOffset - offet;

    window.scrollTo({
      top: offsetPos,
      behavior: 'smooth',
    });
  }
};
