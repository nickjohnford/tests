function setHue(event) {
  document.body.style.setProperty("--hbase", event.target.value);
}
document.getElementById('js-hue').addEventListener('input', setHue);

function setSat(event) {
  document.body.style.setProperty("--sbase", event.target.value + '%');
}
document.getElementById('js-sat').addEventListener('input', setSat);

function setLight(event) {
  document.body.style.setProperty("--lbase", event.target.value + '%');
}
document.getElementById('js-light').addEventListener('input', setLight);


function setHStep(event) {
  document.body.style.setProperty("--hstep", event.target.value);
}
document.getElementById('js-hstep').addEventListener('input', setHStep);

function setSStep(event) {
  document.body.style.setProperty("--sstep", event.target.value + '%');
}
document.getElementById('js-sstep').addEventListener('input', setSStep);

function setLStep(event) {
  document.body.style.setProperty("--lstep", event.target.value + '%');
}
document.getElementById('js-lstep').addEventListener('input', setLStep);
