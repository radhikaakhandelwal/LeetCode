let wallsNgates = function(input){
  let row = input.length;
  let col = input[0].length;

  let visited = new Set();
  let queue = [];

  function addRoom(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col) return;
    if (input[i][j] === -1 || visited.has(`${i},${j}`)) return;

    visited.add(`${i},${j}`);
    queue.push([i, j]);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (input[i][j] === 0) {
        queue.push([i, j]);
        visited.add(`${i},${j}`);
      }
    }
  }

  let dist = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let [i, j] = queue.shift();
      input[i][j] = dist;

      addRoom(i + 1, j);
      addRoom(i - 1, j);
      addRoom(i, j + 1);
      addRoom(i, j - 1);
    }

    dist++;
  }

  return input;
};
