"use strict";
function delayedCall(fn) {
    setTimeout(fn, 2000);
}
delayedCall(function () {
    console.log("Hello");
});
