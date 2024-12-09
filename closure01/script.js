// script.js

// Global Variable Approach
let counterGlobal = 0;
function updateClickCount() {
  ++counterGlobal;
  document.getElementById('clickCountGlobal').textContent = counterGlobal;
}

// Counter Inside Function
function updateClickCountLocal() {
  let counterLocal = 0;
  ++counterLocal;
  document.getElementById('clickCountInsideFunction').textContent = counterLocal;
}

// Nested Functions (Without Closure)
function countWrapper() {
  let counterNested = 0;
  function updateClickCount() {
    ++counterNested;
    document.getElementById('clickCountNested').textContent = counterNested;
  }
  updateClickCount(); // Only called once, doesn't update on click
}

// Closure Approach (Private Variable)
const updateClickCountClosure = (function () {
  let counterClosure = 0;

  return function () {
    ++counterClosure;
    document.getElementById('clickCountClosure').textContent = counterClosure;
  };
})();
