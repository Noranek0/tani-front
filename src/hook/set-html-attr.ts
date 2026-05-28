import { onMounted, onBeforeUnmount } from "vue";

export const useSetHtmlAttr = () => {
  const handleResize = () => {
    const html = document.querySelector("html");
    if (!html) return;

    if (window.innerWidth <= 992) {
      html.setAttribute("data-toggled", "close");
      html.setAttribute("data-nav-layout", "horizontal");
    } else {
      html.setAttribute("data-toggled", "open");
      html.setAttribute("data-nav-layout", "horizontal");
    }
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize)

    const html = document.querySelector('html')
    if (!html) return

    html.setAttribute('data-nav-style', 'menu-click')
    html.setAttribute('data-nav-layout', 'horizontal')
    html.setAttribute('data-menu-styles', '')
    html.setAttribute('data-vertical-style', '')
    html.setAttribute('data-width', '')

    if (localStorage.getItem('yzenMenu') === 'light') {
        html.setAttribute('data-menu-styles', 'light')
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)

    const html = document.querySelector('html')
    if (!html) return

    html.setAttribute('data-nav-style', '')
    html.setAttribute('data-vertical-style', '')

    if (localStorage.getItem('yzennavstyles') === 'horizontal') {
        html.setAttribute('data-nav-layout', 'horizontal')
    } else {
        html.setAttribute('data-nav-layout', 'vertical')
    }
  });
};
