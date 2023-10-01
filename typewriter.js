const sentence = "hello there from lighthouse labs";

for(let i = 0; i < sentence.length; i++){ 
  const char = sentence[i]    
  setTimeout(() => {
    process.stdout.write(char)

  }, i * 1000)

}

setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length * 1000);