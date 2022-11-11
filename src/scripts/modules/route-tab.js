const tabs = document.querySelectorAll('.route__list-item');
const mediaQuery = window.matchMedia('(max-width: 767px)');

const onTabClick = (evt) => {
  const currentTab = evt.target.closest('.route__list-item');

  tabs.forEach((tab) => tab.classList.remove('is-activated'));
  currentTab.classList.add('is-activated');

  if (mediaQuery.matches) {
    currentTab.scrollIntoView(true);
  }
};

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
