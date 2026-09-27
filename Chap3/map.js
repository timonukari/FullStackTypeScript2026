const employees = [
    { name: "tim", id: 1 },
    { name: "cindy", id: 2 },
    { name: "rob", id: 3 },
]

const elements = employees.map(e => `<div>${e.id} ${e.name}</div>`)
console.log(elements)