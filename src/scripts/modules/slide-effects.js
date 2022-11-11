const slideUp = (target, duration = 500) => {
  const element = target;

  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = `${duration}ms`;
  element.style.height = `${element.offsetHeight}px`;
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  window.setTimeout(() => {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
    element.classList.remove('_slide');
  }, duration);
};

const slideDown = (target, duration = 500) => {
  const element = target;

  element.style.removeProperty('display');
  let { display } = window.getComputedStyle(element);
  if (display === 'none') {
    display = 'block';
  }

  element.style.display = display;
  const height = element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = `${duration}ms`;
  element.style.height = `${height}px`;
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    element.style.removeProperty('height');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
    element.classList.remove('_slide');
  }, duration);
};

const slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    }

    return slideUp(target, duration);
  }

  return null;
};

export default slideToggle;
