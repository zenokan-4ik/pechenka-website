export const navigateToRoute = (path) => {
  window.location.href = `${window.location.origin}${window.location.pathname}#${path}`;
};
