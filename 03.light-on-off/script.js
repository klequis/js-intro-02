main()

function main() {
  var ele = document.getElementById("toggle");
  ele.addEventListener("click", toggleLight, false);

}

function toggleLight() {
  let lightbulb = document.getElementById('lightbulb')
  let src = lightbulb.src
  console.log('src', src)
  if (src === 'file:///home/klequis/dev/wk/light-on-off/images/lightbulb-off.svg') {
    lightbulb.src = 'images/lightbulb-on.svg'
  } else {
    lightbulb.src = 'images/lightbulb-off.svg'
  }
}
