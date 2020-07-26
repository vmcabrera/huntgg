const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
};

export const getViewport = () => {
  switch (true) {
    case window.innerWidth < breakpoints.xs:
      return 'xs';
    case window.innerWidth >= breakpoints.xs &&
      window.innerWidth < breakpoints.sm:
      return 'sm';
    case window.innerWidth >= breakpoints.sm &&
      window.innerWidth < breakpoints.md:
      return 'md';
    default:
      return 'md';
  }
};
