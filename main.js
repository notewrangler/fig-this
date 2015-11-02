var menu = {
  "soups": [
    {
      "name": "chicken",
      "price": {
        "cup": 2,
        "bowl": 4
      }
    },
    {
      "name": "minestrone",
      "price": {
        "cup": 2.5,
        "bowl": 5
      }
    }
  ],
  "salads": [
    {
      "name": "waldorf",
      "price": 6
    },
    {
      "name": "cobb",
      "price": 7
    }
  ]
};
// function getHeaders(menu) {
  var courses =[];
  for(var key in menu) {
    courses.push(key);
  }
// }


var courseList = courses.forEach(function(cat) {
   console.log(cat);
   return menu[cat].map(function(thing){
     console.log(thing);
     return {
       course: cat,
       name: thing.name,
       price: thing.price
     };
   });
});
