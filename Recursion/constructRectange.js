let constructRectangle = function(area) {
  let width = Math.sqrt(area);
  let length;
  if (parseInt(width) == width) return [width, width];
  width = parseInt(width);
  while (width > 0) {
    length = area / width;
    if (parseInt(length) === length) return [length, width];
    width--;
  }
};

console.log(constructRectangle(500));
