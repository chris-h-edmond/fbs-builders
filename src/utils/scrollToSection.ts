/**
 * Smoothly scrolls to a DOM element by its ID.
 * Subtracts an offset height to prevent sticky navigation headers from covering target headers.
 */
export function scrollToSection(elementId: string, offset = 80): void {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`[ScrollToSection] Element with ID "${elementId}" not found.`);
    return;
  }

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

export default scrollToSection;
