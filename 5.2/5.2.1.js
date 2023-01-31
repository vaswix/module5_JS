const xmlFile = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;


const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlFile, "text/xml");

const students = xmlDOM.querySelector("list").getElementsByTagName("student");

const student1 = students[0];
const student2 = students[1];

const result = {
    list: [
        {
            name: student1.querySelector("first").textContent,
            age: student1.querySelector("age").textContent,
            prof: student1.querySelector("prof").textContent,
            lang: student1.querySelector("name").getAttribute("lang")
        },
        {
            name: student2.querySelector("first").textContent,
            age: student2.querySelector("age").textContent,
            prof: student2.querySelector("prof").textContent,
            lang: student2.querySelector("name").getAttribute("lang")
        }
    ]
};

console.log("result", result);