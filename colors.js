//importar color
var colors = require("colors");

colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

// outputs red text
console.log("this is an error".error);

// outputs yellow text
console.log("this is a warning".warn);
//otra forma
console.log(colors.green("hello")); // outputs green text
console.log(colors.red.underline("i like cake and pies")); // outputs red underlined text
console.log(colors.inverse("inverse the color")); // inverses the color
console.log(colors.rainbow("OMG Rainbows!")); // rainbow
console.log(colors.trap("Run the trap")); // Drops the bass
