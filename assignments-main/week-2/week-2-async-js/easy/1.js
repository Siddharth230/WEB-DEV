let ctr = 1;
function callback() {
  console.clear();
  console.log(ctr);
  ctr++;
}

setInterval(callback, 1000);
