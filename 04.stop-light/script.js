changeLight('green')

function changeLight(color) {
  let top = document.getElementById('top')
  let middle = document.getElementById('middle')
  let bottm = document.getElementById('bottom')
  console.log('color=', color)
  if (color === 'red') {
    console.log('color is red')
    top.src = 'images/red-on.svg'
    middle.src = 'images/yellow-off.svg'
    bottom.src = 'images/green-off.svg'
  } else if (color === 'yellow') {
    console.log('color is yellow')
    top.src = 'images/red-off.svg'
    middle.src = 'images/yellow-on.svg'
    bottom.src = 'images/green-off.svg'
  } else {
    console.log('color is green')
    top.src = 'images/red-off.svg'
    middle.src = 'images/yellow-off.svg'
    bottom.src = 'images/green-on.svg'
  }
}
