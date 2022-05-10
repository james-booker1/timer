const alarm = function () {
  let time = process.argv.slice(2);
  let delay = 0;
  if (time.length <= 0) {
    return null;
  }
  for (num of time) {
    if (isNaN(num) || num <= 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write("\x07");
    }, (delay += num * 1000));
  }
};

alarm();
