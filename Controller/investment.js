// Dưới đây là đoạn code **JavaScript** để tính **tỷ suất lợi nhuận theo trọng số dòng tiền (MWRR)** bằng phương pháp **IRR (Internal Rate of Return)**.

// Code này sử dụng phương pháp lặp **Newton-Raphson** để tìm nghiệm của phương trình IRR.

// ---

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
