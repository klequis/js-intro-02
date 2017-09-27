main()
function main() {
  let ele = document.getElementById("btn-red");
  ele.addEventListener("click", changeLight, false);
  ele = document.getElementById("btn-yellow");
  ele.addEventListener("click", changeLight, false);
  ele = document.getElementById("btn-green");
  ele.addEventListener("click", changeLight, false);
}



function changeLight(e) {
  let top = document.getElementById('top')
  let middle = document.getElementById('middle')
  let bottm = document.getElementById('bottom')
  if (color === 'red') {
    top.src = 'images/red-on.svg'
    middle.src = 'images/yellow-off.svg'
    bottom.src = 'images/green-off.svg'
  } else if (color === 'yellow') {
    top.src = 'images/red-off.svg'
    middle.src = 'images/yellow-on.svg'
    bottom.src = 'images/green-off.svg'
  } else {
    top.src = 'images/red-off.svg'
    middle.src = 'images/yellow-off.svg'
    bottom.src = 'images/green-on.svg'
  }
}
