function debounce(func: Function, wait: number) {
  let debounceTimeout: any;
  return function (...args: any) {
    //@ts-ignore
    const context = this;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function handleScroll() {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const sectionId = section.getAttribute("id");
      const newHash = `#${sectionId}`;
      window.history.pushState(null, "", newHash);
    }
  });
}

export const protectScroll = (time: number) => debounce(handleScroll, time);
