abstract class Camera2 {
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  abstract getSepia(): void
  getReelTime(): number{
    // some complex calcultion here and
    return 4
  }
}

class telegram extends Camera2{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){ super(cameraMode, filter)}

  getSepia(): void {
    console.log('sepia')
  }
}

const hetesh = new telegram('', '', 2)
hetesh.getSepia()
hetesh.getReelTime()