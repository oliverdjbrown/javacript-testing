//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

//to solve this exercise I will use the heron formula that I learn from a youtube video
//source => https://youtu.be/QtHQFAbgdPU

function calcTrianguleSides(sideA, sideB, sideC) {
  const perimeter = sideA + sideB + sideC;
  const semiPerimeter = perimeter / 2;
  const area =
    semiPerimeter *
    (semiPerimeter - sideA) *
    (semiPerimeter - sideB) *
    (semiPerimeter - sideC);
  return area;
}

console.log(calcTrianguleSides(4, 5, 7));

module.exports = { calcTrianguleSides };
