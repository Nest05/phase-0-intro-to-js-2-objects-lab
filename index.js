// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  }

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator
    let updatedEmployee = { ...employee };
  
    // Update the value for the given key
    updatedEmployee[key] = value;
  
    // Return the updated employee object
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the value for the given key directly on the employee object
    employee[key] = value;

  return employee;
    // No need to return anything since the employee object has been mutated
  }
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object using the spread operator, omitting the property with the given key
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
  
    // Return the updated employee object without the identified key-value pair
    return updatedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the property with the given key directly on the employee object
    delete employee[key];
    return employee;
  }
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");