const timer = process.argv.sort((a, b) => a - b);


for (time of timer) {
  if (Number.isNaN(time) === false && time > 0){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}