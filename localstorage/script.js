const timeNow = new Date().getTime();

// check if storage exists and save into object
let storeExists = false;
let storeObj = {};
if (localStorage.myStore) {
  console.log('✅ storage found.');
  storeExists = true;
  storeObj = JSON.parse(localStorage.myStore);
}

// check if any items have expired
if (storeExists) {
  const timeToTest = storeObj.testOne.exp;
  if (timeToTest < timeNow) {
    console.log('item has expired!');
  } else {
    console.log('item is valid');
  }
}

// if no key then create a new one
if (!storeExists) {
  console.log('❌ storage not found.');
  let storeObj = {};
  storeObj.testOne = {};
  storeObj.testOne.val = Math.floor(Math.random() * 100);
  storeObj.testOne.exp = timeNow + (1000 * 10);
  localStorage.setItem('myStore', JSON.stringify(storeObj));
}


// output contents of localstorage
console.table(localStorage);
const storeElem = document.getElementById('storage');
storeElem.value = JSON.stringify(localStorage);
