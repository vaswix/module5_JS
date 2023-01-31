const book = `{
  "list":
      [
          {
              "name": "Petr",
              "age": "20",
              "prof": "mechanic"
          },
          {
              "name": "Vova",
              "age": "60",
              "prof": "pilot"
          }
      ]
}`

const parsing = JSON.parse(book);
console.log(parsing);
