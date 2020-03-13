args = [1, 25, 156, 256, 7658, 325756, 867, 43, 224];

function a(args) {
  let min = 10000000;

  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}
