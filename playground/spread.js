console.log(["Doug", "Ted", "Erik"].indexOf("Ted"));


var greet = function(name,age){
  console.log("Hello "+name+" you are "+age)
}

var person = ["Doug", 52]
greet(...person);

var names = ['Ted', 'Erik'];
var final = [...names, 'Brad'];

final.map((name)=>{
  return console.log(name);
});

console.log(
  final
  .map(function(name){
    return name;
  }).sort()
);

console.log(
  // This one works:
  final
  .map(function (i) {
    return i + i;
  })
  // Chaining!
  .sort()
);
