// // Example 1
// function expect(val) {
//     return {
//         toBe: function(expected) {
//             if (val === expected) {
//                 return true;
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: function(expected) {
//             if (val !== expected) {
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             }
//         }
//     };
// }

// // Example 1
// try {
//     const result = expect(5).toBe(5);
//     console.log({ value: result });  // { value: true }
// } catch (err) {
//     console.log({ error: err.message });
// }

// // Example 2
// try {
//     const result = expect(5).toBe(null);
//     console.log({ value: result });
// } catch (err) {
//     console.log({ error: err.message });  // { error: "Not Equal" }
// }

// // Example 3
// try {
//     const result = expect(5).notToBe(null);
//     console.log({ value: result });  // { value: true }
// } catch (err) {
//     console.log({ error: err.message });
// }

/////////////////////////////////////////////////////////////Example 2
// function createCounter(init) {
//     let current = init;

//     return {
//         increment: function() {
//             current += 1;
//             return current;
//         },
//         decrement: function() {
//             current -= 1;
//             return current;
//         },
//         reset: function() {
//             current = init;
//             return current;
//         }
//     };
// }
// // Example 1
// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.reset());     // 5
// console.log(counter.decrement()); // 4
// // Example 2
// const counter2 = createCounter(0);
// console.log(counter2.increment()); // 1
// console.log(counter2.increment()); // 2
// console.log(counter2.decrement()); // 1
// console.log(counter2.reset());     // 0
// console.log(counter2.reset());     // 0

///////////////////////////// ///////////////////////Example 3
// function removeDuplicates(nums) {
//     if (nums.length === 0) return 0;

//     let k = 1; 

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// }
// // // Example
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = removeDuplicates(nums);

// console.log("k =", k);              // 5
// console.log("unique elements =", nums.slice(0, k)); // [0, 1, 2, 3, 4]

///////////////////////////// ///////////////////////Example 4
// function maxProfit(prices) {
//     let minPrice = Infinity;     
//     let maxProfit = 0;       

//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i]; 
//         } else {
//             let profit = prices[i] - minPrice;   
//             if (profit > maxProfit) {
//                 maxProfit = profit;  
//             }
//         }
//     }

//     return maxProfit;
// }

// ///Example 1
// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));  // 5
// ///Example 2
// let prices2 = [7, 6, 4, 3, 1];
// console.log(maxProfit(prices2));  // 0

///////////////////////////// ///////////////////////Example 5

