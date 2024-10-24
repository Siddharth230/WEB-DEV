let ctr = 0;
function callback() {
  console.log(ctr);
  ctr++;
}

setInterval(callback, 1000);
