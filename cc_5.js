let employees = [
    {name: "Kaitlyn", hourlyRate: 10, hoursWorked: 20},
    {name: "Paul Bunyan", hourlyRate: 3, hoursWorked: 100},
    {name: "Rhea", hourlyRate: 30, hoursWorked: 15},
    {name: "Rumi", hourlyRate: 18, hoursWorked: 28},
]

function calculateBasePay(rate, hours) {
    let regularHours = Math.min(hours, 40);
    return rate * regularHours;
}

function calculateOvertimePay(rate, hours) {
    let overtimeHours = Math.max(hours - 40, 0);
    return overtimeHours * rate * 1.5;
}

function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

for (let emp of employees) {
    let payroll = processPayroll(emp)
    console.log(payroll);
}