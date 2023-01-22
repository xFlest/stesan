function rotateStesan(e: any) {
  const vh: number = window.innerHeight
  const vw: number = window.innerWidth
  const cursorX: number = e.clientX
  const cursorY: number = e.clientY
  const degreeX: number = (cursorY - (vh / 2)) / (vh / 2) * -20
  const degreeY: number = (cursorX - (vw / 2)) / (vw / 2) * 20
  const stesan: HTMLElement = document.getElementsByClassName('stesan')[0] as HTMLInputElement
  stesan.style.setProperty('transform', `rotateX(${degreeX}deg) rotateY(${degreeY}deg)`)
}
export {rotateStesan}