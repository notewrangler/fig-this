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

for(var key in menu) {
  console.log(key);
}


var heads = menu[key].map(function(course){
     return {
       course: key,
       name: course.name,
       price: course.price
     };
  });



console.log(heads);
