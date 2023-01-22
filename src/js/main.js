const rotateStesan = e => {
  const vh = window.innerHeight
  const vw = window.innerWidth
  const cursorX = e.clientX
  const cursorY = e.clientY
  const degreeX = (cursorY - (vh / 2)) / (vh / 2) * -20
  const degreeY = (cursorX - (vw / 2)) / (vw / 2) * 20
  const stesan = document.getElementsByClassName('stesan')[0]
  stesan.style.setProperty('transform', `rotateX(${degreeX}deg) rotateY(${degreeY}deg)`)
}