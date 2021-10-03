function setup() {
  createCanvas(900, 900)
  noLoop()
}

function draw() {
  background('#FAFAFA')
  noFill()
  strokeWeight(2)
  
  const cx = height * 0.5
  const cy = width * 0.5
  const cr = height * 0.5
  
  const row = 10
  const col = 20
  const marginy = col * 0.5
  const marginx = row * 0.5
  
  let random_min = -10
  let random_max = 10
  
  for (let y = marginy ; y < height - marginy; y += col) {
    for (let x = marginx; x < width - marginx; x += row) {
      
      let off_1 = random(random_min, random_max)
      let off_2 = random(random_min, random_max)
      let r = random(0, 50)
      stroke('black')
      
      if (pointInCircle(x, y, cx, cy , cr * 0.5) === false) {
        if (r < 1) {
          stroke('orange')
        }
        line(x + row * 0.1, y + col * 0.5 + off_1, x + row * 0.9, y + col * 0.5 + off_2)
      }
    }
  }
  
function pointInCircle(x, y, cx, cy, radius) {
  // x,y is the point to test
  // cx, cy is circle center, and radius is circle radius
  var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
  return distancesquared <= radius * radius;
}
}