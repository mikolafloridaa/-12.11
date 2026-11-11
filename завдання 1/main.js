const employees = [
    { name: "Олег", hours: 160, rate: 200 },
    { name: "Марія", hours: 145, rate: 250 },
    { name: "Іван", hours: 180, rate: 180 },
    { name: "Анна", hours: 170, rate: 220 }
  ];
  function calculateSalary(hours, rate) {
    let salary = hours * rate;
  
    if (hours > 160) {
      salary = salary + salary / 10;
    }
  
    return salary;
  }
  
  for (const employee of employees) {
    const salary = calculateSalary(employee.hours, employee.rate);
  
    if (employee.hours > 160) {
      console.log(employee.name + ": " + salary + " грн (з бонусом)");
    } else {
      console.log(employee.name + ": " + salary + " грн");
    }
  }
  function calculatePayroll(employees) {
    let total = 0;
  
    for (const employee of employees) {
      total = total + calculateSalary(employee.hours, employee.rate);
    }
  
    return total;
  }
  
  console.log("Загальні витрати: " + calculatePayroll(employees) + " грн");
  