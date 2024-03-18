// function myfun(a) {
//   console.log(a+(a*.18));
// }

// myfun(10599)

function submitFun() {
  const Amt = parseFloat(document.getElementById("amount").value);
  if (isNaN(Amt) || Amt <=0) {
    alert("Please enter a valid amount!");
    return;
  }

  const gst = Amt+(Amt*.18);
  document.getElementById("result-amt").textContent = gst.toFixed(2);
}

function resetFun() {
  document.getElementById("amount").value= null;
  document.getElementById("result-amt").textContent = null;
}