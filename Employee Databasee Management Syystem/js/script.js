(async function () {
  const data = await fetch("data.json");
  const res = await data.json();

  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  // Add Employee - START
  const createEmployee = document.querySelector(".createEmployee");
  const addEmployeeModal = document.querySelector(".addEmployee");
  const addEmployeeForm = document.querySelector(".addEmployee_create");

  createEmployee.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  addEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });

  // Set Employee age to be entered minimum 18 years
  const dobInput = document.querySelector(".addEmployee_create--dob");
  dobInput.max = `${new Date().getFullYear() - 18}-${new Date()
    .toISOString()
    .slice(5, 10)}`;

  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addEmployeeForm);
    const values = [...formData.entries()];
    let empData = {};
    values.forEach((val) => {
      empData[val[0]] = val[1];
    });
    empData.id = employees[employees.length - 1].id + 1;
    empData.age =
      new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
    empData.imageUrl = empData.imageUrl || "gfg.png";
    employees.push(empData);
    renderEmployees();
    addEmployeeForm.reset();
    addEmployeeModal.style.display = "none";
  });
  // Add Employee - END

  // Select Employee Logic - START
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }
    // Employee Delete Logic - START
    if (e.target.tagName === "I") {
      employees = employees.filter(
        (emp) => String(emp.id) !== e.target.parentNode.id
      );
      if (String(selectedEmployeeId) === e.target.parentNode.id) {
        selectedEmployeeId = employees[0]?.id || -1;
        selectedEmployee = employees[0] || {};
        renderSingleEmployee();
      }
      renderEmployees();
    }
    // Employee Delete Logic - END
  });
  // Select Employee Logic - END

  // Render All Employees Logic - START
  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");
      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} 
                <i class="employeeDelete">&#10060;</i>`;
      employeeList.append(employee);
    });
  };
  // Render All Employees Logic - END

  // Render Single Employee Logic - START
  const renderSingleEmployee = () => {
    // Employee Delete Logic - START
    if (selectedEmployeeId === -1) {
      employeeInfo.innerHTML = "";
      return;
    }
    // Employee Delete Logic - END

    employeeInfo.innerHTML = `
        <img src="${selectedEmployee.imageUrl}" />
        <span class="employees__single--heading">
        ${selectedEmployee.firstName} ${selectedEmployee.lastName} 
            (${selectedEmployee.age})
        </span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>Mobile - ${selectedEmployee.contactNumber}</span>
        <span>DOB - ${selectedEmployee.dob}</span>
      `;
  };
  // Render Single Employee Logic - END

  renderEmployees();
  if (selectedEmployee) renderSingleEmployee();
})();

// // data.json
// [
//   {
//     id: 1001,
//     imageUrl: "gfg.png",
//     firstName: "Thomas",
//     lastName: "Leannon",
//     email: "Thomas.Leannon@gfg.com",
//     contactNumber: "4121091095",
//     age: 43,
//     dob: "26/08/1979",
//     salary: 1,
//     address: "Address1",
//   },
//   {
//     id: 1002,
//     imageUrl: "gfg.png",
//     firstName: "Faye",
//     lastName: "Sauer",
//     email: "Faye.Sauergfg.com",
//     contactNumber: "4914696673",
//     age: 60,
//     dob: "28/06/1962",
//     salary: 2,
//     address: "Address2",
//   },
//   {
//     id: 1003,
//     imageUrl: "gfg.png",
//     firstName: "Deven",
//     lastName: "Halvorson",
//     email: "Deven.Halvorsongfg.com",
//     contactNumber: "4479795571",
//     age: 29,
//     dob: "06/01/1993",
//     salary: 3,
//     address: "Address3",
//   },
//   {
//     id: 1004,
//     imageUrl: "gfg.png",
//     firstName: "Melisa",
//     lastName: "Schuppe",
//     email: "Melisa.Schuppegfg.com",
//     contactNumber: "4443995334",
//     age: 38,
//     dob: "06/09/1984",
//     salary: 4,
//     address: "Address4",
//   },
//   {
//     id: 1005,
//     imageUrl: "gfg.png",
//     firstName: "Dell",
//     lastName: "Kris",
//     email: "Dell.Krisgfg.com",
//     contactNumber: "4505692843",
//     age: 89,
//     dob: "14/03/1933",
//     salary: 5,
//     address: "Address5",
//   },
//   {
//     id: 1006,
//     imageUrl: "gfg.png",
//     firstName: "Marcia",
//     lastName: "Gutmann",
//     email: "Marcia.Gutmanngfg.com",
//     contactNumber: "4746199430",
//     age: 56,
//     dob: "24/07/1966",
//     salary: 6,
//     address: "Address6",
//   },
//   {
//     id: 1007,
//     imageUrl: "gfg.png",
//     firstName: "Jarrod",
//     lastName: "Ortiz",
//     email: "Jarrod.Ortizgfg.com",
//     contactNumber: "4859095720",
//     age: 82,
//     dob: "26/12/1940",
//     salary: 7,
//     address: "Address7",
//   },
//   {
//     id: 1008,
//     imageUrl: "gfg.png",
//     firstName: "Gabriella",
//     lastName: "Wilkinson",
//     email: "Gabriella.Wilkinsongfg.com",
//     contactNumber: "4379190775",
//     age: 36,
//     dob: "24/06/1986",
//     salary: 8,
//     address: "Address8",
//   },
//   {
//     id: 1009,
//     imageUrl: "gfg.png",
//     firstName: "Elisabeth",
//     lastName: "Hayes",
//     email: "Elisabeth.Hayesgfg.com",
//     contactNumber: "4394091994",
//     age: 66,
//     dob: "17/08/1956",
//     salary: 9,
//     address: "Address9",
//   },
//   {
//     id: 1010,
//     imageUrl: "gfg.png",
//     firstName: "Jaime",
//     lastName: "Reichel",
//     email: "Jaime.Reichelgfg.com",
//     contactNumber: "4622392580",
//     age: 41,
//     dob: "21/01/1981",
//     salary: 10,
//     address: "Address10",
//   },
// ];
