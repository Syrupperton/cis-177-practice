console.log(window);

window.console.log("Hello");

//global scope alongside (NOT INSIDE) 'window'
const me = {
  name: "Matthew"
};

// console.log(window.me)  //undefined
// console.log(window.me.name) //error
