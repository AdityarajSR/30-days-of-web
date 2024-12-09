// Simple sum calculation function
let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Memoization function
const memoize = (fun) => {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    };
};

// Measuring time for memoized function
console.time(); // Start timing
const efficient = memoize(calc); // Create memoized version of calc
console.log(efficient(5)); // Log the result for the input 5
console.timeEnd(); // End timing and log the elapsed time

// // Regular function call (not memoized)
// console.time();
// console.log(calc(5)); // Log the result without memoization
// console.timeEnd()