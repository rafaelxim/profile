/* eslint-disable @typescript-eslint/ban-ts-comment */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // Rolagem suave
      block: 'start', // Alinha o topo do elemento com o topo da tela
    });
  }
};

export function gtag_report_conversion() {
  // @ts-ignore
  window.gtag('event', 'conversion', {
    send_to: 'AW-923675117/gHQTCM-a4IoaEO3TuLgD',
    value: 1.0,
    currency: 'BRL',
  });
  return false;
}
