export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // Rolagem suave
      block: 'start', // Alinha o topo do elemento com o topo da tela
    });
  }
};
