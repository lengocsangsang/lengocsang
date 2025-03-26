const cashflowTableBody = document.querySelector(".table-cashflow tbody");

function getCashflowInfo() {
  let cashflowObject = {};
  let cashflowArray = [];

  document.querySelector(".button-add").addEventListener("click", function (e) {
    e.preventDefault();
    // CASE 1: LOCAL STORAGE === null
    if (localStorage.getItem("cashflow") === null) {
      // 0. GET VALUE FOR cashflowDate and cashflowMoney
      const cashflowDate = document.querySelector(".input-date").value;
      const cashflowMoney = document.querySelector(".input-money").value;
      if (cashflowDate && cashflowMoney) {
        // 1. CREATE OBJECT OF cashflowObject;
        cashflowObject.date = cashflowDate;
        cashflowObject.money = cashflowMoney;
        // 2. ADD cashflowObject to cashflowArray
        cashflowArray.push(cashflowObject);
        // 3. save cashflowArray to localstorage as "cashflow"
        localStorage.setItem("cashflow", JSON.stringify(cashflowArray));
      } else {
        console.log("please input date and money");
      }
      // CREATE NEW ROW
      const newCashflowRow = document.createElement("tr");

      // CREATE AND ADD DATE CELL TO ROW
      const dateCell = document.createElement("td");
      dateCell.textContent = cashflowDate;
      newCashflowRow.appendChild(dateCell);

      // CREATE AND ADD money CELL TO ROW
      const moneyCell = document.createElement("td");
      moneyCell.textContent = cashflowMoney;
      newCashflowRow.append(moneyCell);

      // ADD newCashflowRow to cashflowTableBody
      cashflowTableBody.appendChild(newCashflowRow);
    } else {
      cashflowArray = JSON.parse(localStorage.getItem("cashflow"));
      const cashflowDate = document.querySelector(".input-date").value;
      const cashflowMoney = document.querySelector(".input-money").value;
      if (cashflowDate && cashflowMoney) {
        cashflowObject.date = cashflowDate;
        cashflowObject.money = cashflowMoney;
        cashflowArray.push(cashflowObject);
        localStorage.setItem("cashflow", JSON.stringify(cashflowArray));
      }
      // CREATE NEW ROW
      const newCashflowRow = document.createElement("tr");

      // CREATE AND ADD DATE CELL TO ROW
      const dateCell = document.createElement("td");
      dateCell.textContent = cashflowDate;
      newCashflowRow.appendChild(dateCell);

      // CREATE AND ADD money CELL TO ROW
      const moneyCell = document.createElement("td");
      moneyCell.textContent = cashflowMoney;
      newCashflowRow.append(moneyCell);

      // ADD newCashflowRow to cashflowTableBody
      cashflowTableBody.appendChild(newCashflowRow);
    }
  });
}

function clearCashflowTable() {
  document
    .querySelector(".table-cashflow-remove-button")
    .addEventListener("click", localStorage.clear());
}

export default function investmentFunction() {
  document.addEventListener("DOMContentLoaded", function () {
    if (!(localStorage.getItem("cashflow") === null)) {
      console.log("TABLEEEEEEE");
      const cashflowArray = JSON.parse(localStorage.getItem("cashflow"));
      for (const dateMoneyPair of cashflowArray) {
        // CREATE NEW ROW
        const newCashflowRow = document.createElement("tr");

        // CREATE AND ADD DATE CELL TO ROW
        const dateCell = document.createElement("td");
        dateCell.textContent = dateMoneyPair.date;
        newCashflowRow.appendChild(dateCell);

        // CREATE AND ADD money CELL TO ROW
        const moneyCell = document.createElement("td");
        moneyCell.textContent = dateMoneyPair.money;
        newCashflowRow.append(moneyCell);

        // ADD newCashflowRow to cashflowTableBody
        cashflowTableBody.appendChild(newCashflowRow);
      }
    }
  });
  getCashflowInfo();
  clearCashflowTable();
}

// document.addEventListener("DOMContentLoaded", function () {
//   const tableBody = document.querySelector("#infoTable tbody");
//   const nameInput = document.getElementById("nameInput");
//   const ageInput = document.getElementById("ageInput");
//   const cityInput = document.getElementById("cityInput");
//   const addRowButton = document.getElementById("addRowButton");

//   addRowButton.addEventListener("click", function () {
//     const name = nameInput.value.trim();
//     const age = ageInput.value.trim();
//     const city = cityInput.value.trim();

//     if (name === "" || age === "" || city === "") {
//       alert("Please fill out all fields.");
//       return;
//     }

//     // Create a new row
//     const newRow = document.createElement("tr");

//     // Add cells to the row
//     const nameCell = document.createElement("td");
//     nameCell.textContent = name;
//     newRow.appendChild(nameCell);

//     const ageCell = document.createElement("td");
//     ageCell.textContent = age;
//     newRow.appendChild(ageCell);

//     const cityCell = document.createElement("td");
//     cityCell.textContent = city;
//     newRow.appendChild(cityCell);

//     // Append the new row to the table body
//     tableBody.appendChild(newRow);

//     // Clear input fields
//     nameInput.value = "";
//     ageInput.value = "";
//     cityInput.value = "";
//   });
// });

// ### **Code JavaScript:**
// ```javascript
// function computeIRR(cashFlows, guess = 0.1, maxIterations = 100, precision = 1e-6) {
//     let rate = guess;

//     for (let i = 0; i < maxIterations; i++) {
//         let npv = 0;
//         let derivative = 0;

//         for (let t = 0; t < cashFlows.length; t++) {
//             npv += cashFlows[t] / Math.pow(1 + rate, t);
//             derivative += -t * cashFlows[t] / Math.pow(1 + rate, t + 1);
//         }

//         if (Math.abs(npv) < precision) {
//             return rate * 100; // Chuyển thành %
//         }

//         rate -= npv / derivative; // Newton-Raphson update

//         if (Math.abs(npv) < precision) {
//             return rate * 100;
//         }
//     }

//     return null; // Không hội tụ
// }

// // Danh sách dòng tiền (âm: đầu tư, dương: thu về)
// const cashFlows = [-10000, -2000, 6000, -1000, 12000];

// // Tính IRR
// const mwrr = computeIRR(cashFlows);

// console.log(`Tỷ suất lợi nhuận theo trọng số dòng tiền (MWRR): ${mwrr.toFixed(2)}%`);
// ```

// ---

// ### **Cách hoạt động:**
// - **Phương pháp Newton-Raphson**: Lặp lại để tìm giá trị `r` sao cho NPV gần bằng 0.
// - `cashFlows` chứa dòng tiền theo từng kỳ.
// - `guess` là giá trị ban đầu (10%).
// - `maxIterations` là số lần lặp tối đa (100 lần).
// - `precision` là sai số chấp nhận được (`1e-6`).

// ---

// ### **Kết quả:**
// Với dữ liệu mẫu:
// ```js
// const cashFlows = [-10000, -2000, 6000, -1000, 12000];
// ```
// **Kết quả in ra:**
// ```
// Tỷ suất lợi nhuận theo trọng số dòng tiền (MWRR): 11.73%
// ```

// Bạn có thể **copy & chạy** code này trong trình duyệt hoặc **Node.js**! 🚀
