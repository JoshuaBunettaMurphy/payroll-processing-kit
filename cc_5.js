let employees = [
    {name: "Kaitlyn", hourlyRate: 10, hoursWorked: 20},
    {name: "Paul Bunyan", hourlyRate: 3, hoursWorked: 100},
    {name: "Rhea", hourlyRate: 30, hoursWorked: 15}
    {name: "Rumi", hourlyRate: 18, hoursWorked: 28},
    {name: "Becky", hourlyRate: 50, hoursWorked: 27}
]

function calculateBasePay(rate, hours) {
    let hours = Math.min(hours, 40);
    return rate * hours;
}

