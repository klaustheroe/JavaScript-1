let userName = prompt("Please enter your name!");
let unDefined = ("User");
if (userName.length > 0){
  document.querySelector('#inner-un').innerText = userName
} else{
  document.querySelector('#inner-un').innerText = unDefined
}
if (userName.length > 0){
  document.querySelector('#inner-un2').innerText = userName
} else{
  document.querySelector('#inner-un').innerText = unDefined
}


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('hour').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

const m = new Date();
document.getElementById('month').innerHTML = m.getMonth() + 1 +("/");

const y = new Date();
document.getElementById('year').innerHTML = y.getFullYear();

const d = new Date();
document.getElementById('day').innerHTML = d.getDate()  + ("/"); 
