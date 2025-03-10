const carouselElem = document.querySelector('.scrollwrap--controls--js');
function onCarouselIntersection(entriesArr) {
  entriesArr.forEach((entryObj) => {
    if (entryObj.isIntersecting) {
      console.log(entryObj);
    }
  });
}
const observerOptionsObj = {
  root: carouselElem,
  rootMargin: '0px',
  threshold: 0.5
};
const carouselObserverObj = new IntersectionObserver(onCarouselIntersection, observerOptionsObj);
carouselObserverObj.observe(carouselElem.firstElementChild);
carouselObserverObj.observe(carouselElem.lastElementChild);
