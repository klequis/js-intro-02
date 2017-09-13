// main()
//
// function main() {
//   console.log('main')
//   let div1 = document.getElementById("div1");
//   let div2 = document.getElementById("div2");
//   div1.style.backgroundColor = 'red'
//   div2.style.backgroundColor = 'red'
// }

main('div1')

function main(whichDiv) {
  console.log('main')
  let div = document.getElementById(whichDiv);
  div.style.backgroundColor = 'red'
}
