let company = {
  sales: [{name: 'John', salary: 100}, {name: 'Alice', salary: 100}],
  bdsm: [{name: 'Anna', salary: 100}],
  development: {
    web: [{name: 'Peter', salary: 100}, {name: 'Alex', salary: 100}],
    back: [{name: 'Alex', salary: 100}, {name: 'Ivan', salary: 100}],
    internals: [{name: 'Jack', salary: 100}]
  },
  qa: {
    manual: [{name: 'm1', salary: 100}, {name: 'm2', salary: 100}],
    auto: [{name: 'a1', salary: 100}, {name: 'a2', salary: 100}],
  }
};

function calculateSalaries(department, departmentName = "total") {
  let salaries = {};
  let totalSalary = 0;

  if (Array.isArray(department)) {
    salaries[departmentName] = department.reduce((sum, employee) => sum + employee.salary, 0);
    totalSalary = salaries[departmentName];
  } else {
    for (let [subDeptName, subDept] of Object.entries(department)) {
      let fullDeptName = departmentName === "total" ? subDeptName : `${departmentName}.${subDeptName}`;
      let subSalaries = calculateSalaries(subDept, fullDeptName);
      totalSalary += subSalaries.total;
      delete subSalaries.total;
      Object.assign(salaries, subSalaries);
    }
  }

  salaries["total"] = totalSalary;
  return salaries;
}

let salaryData = calculateSalaries(company);

let entries = Object.entries(salaryData);
let resultTable = entries.slice(0, -1);
resultTable.push(["total", salaryData.total]);

console.table(Object.fromEntries(resultTable));
