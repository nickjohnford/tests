const carouselElem = document.querySelector('.scrollwrap--controls--js');
const carouselPrevBtnElem = carouselElem.querySelector('.scrollcontrol--prev');
const carouselNextBtnElem = carouselElem.querySelector('.scrollcontrol--next');
function isFirstItem(entryObj) {
  return entryObj.target === carouselElem.querySelector('.scrollitem:first-of-type');
}
function onCarouselIntersection(entriesArr) {
  entriesArr.forEach((entryObj) => {
    if (entryObj.isIntersecting) {
      if (true === isFirstItem(entryObj)) {
        carouselPrevBtnElem.disabled = true;
      }
      if (false === isFirstItem(entryObj)) {
        carouselNextBtnElem.disabled = true;
      }
    }
    if (false === entryObj.isIntersecting) {
      if (true === isFirstItem(entryObj)) {
        carouselPrevBtnElem.disabled = false;
      }
      if (false === isFirstItem(entryObj)) {
        carouselNextBtnElem.disabled = false;
      }
    }
  });
}
const observerOptionsObj = {
  root: carouselElem,
  rootMargin: '0px',
  threshold: 0.5
};
const carouselObserverObj = new IntersectionObserver(onCarouselIntersection, observerOptionsObj);
carouselObserverObj.observe(carouselElem.querySelector('.scrollitem:first-of-type'));
carouselObserverObj.observe(carouselElem.querySelector('.scrollitem:last-of-type'));
