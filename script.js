// Variable declarations using different types
let studentName = "John Doe";
const studentAge = 18;
var currentYear = 2025;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let studentGrades = {
    math: 85,
    english: 92,
    science: 78,
    history: 88
};

// Function to demonstrate conditionals
function evaluateStudent() {
    let output = "";
    
    // Conditional statements
    if (studentAge >= 18) {
        output += `${studentName} is an adult student (${studentAge} years old).<br>`;
    } else {
        output += `${studentName} is a minor student (${studentAge} years old).<br>`;
    }
    
    // Calculate average grade
    let total = studentGrades.math + studentGrades.english + studentGrades.science + studentGrades.history;
    let average = total / 4;
    
    // Multiple conditional statements
    if (average >= 90) {
        output += `Excellent performance! Average: ${average}% (Grade: A)`;
    } else if (average >= 80) {
        output += `Good performance! Average: ${average}% (Grade: B)`;
    } else if (average >= 70) {
        output += `Fair performance! Average: ${average}% (Grade: C)`;
    } else if (average >= 60) {
        output += `Below average performance! Average: ${average}% (Grade: D)`;
    } else {
        output += `Poor performance! Average: ${average}% (Grade: F)`;
    }
    
    return output;
}

// Function to Calculate the square of a number
function calculateSquare(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return "Please enter a valid number";
    }
    
    let square = number * number;
    return `The square of ${number} is ${square}`;
}

// Function to Calculate factorial of a number
function calculateFactorial(number) {
    if (typeof number !== 'number' || isNaN(number) || number < 0) {
        return "Please enter a valid positive number";
    }
    
    if (number === 0 || number === 1) {
        return `The factorial of ${number} is 1`;
    }
    
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    
    return `The factorial of ${number} is ${factorial}`;
}

// Function to demonstrate For Loop
function demonstrateForLoop() {
    let output = "<h3>For Loop Example:</h3>";
    output += "<p>Counting from 1 to 10:</p>";
    output += "<ul>";
    
    // For loop example
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            output += `<li>Number ${i} is even</li>`;
        } else {
            output += `<li>Number ${i} is odd</li>`;
        }
    }
    
    output += "</ul>";
    return output;
}

// Function to demonstrate While Loop
function demonstrateWhileLoop() {
    let output = "<h3>While Loop Example:</h3>";
    output += "<p>Fibonacci sequence (first 8 numbers):</p>";
    output += "<ul>";
    
    // While loop example - The Fibonacci sequence
    let a = 0, b = 1, count = 0;
    
    while (count < 8) {
        if (count === 0) {
            output += `<li>Fibonacci ${count + 1}: ${a}</li>`;
            count++;
        } else if (count === 1) {
            output += `<li>Fibonacci ${count + 1}: ${b}</li>`;
            count++;
        } else {
            let next = a + b;
            output += `<li>Fibonacci ${count + 1}: ${next}</li>`;
            a = b;
            b = next;
            count++;
        }
    }
    
    output += "</ul>";
    return output;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize - Display variables and conditionals
    document.getElementById('user-info').innerHTML = 
        `<strong>Student Info:</strong> Name: ${studentName}, Age: ${studentAge}, Hobbies: ${hobbies.join(', ')}`;
    document.getElementById('grade-result').innerHTML = evaluateStudent();
    
    // DOM Interaction - Button click to calculate square and factorial
    document.getElementById('calculate-btn').addEventListener('click', function() {
        let inputValue = parseInt(document.getElementById('calc-input').value);
        let output = "<h4>Function Results:</h4>";
        output += "<p>" + calculateSquare(inputValue) + "</p>";
        output += "<p>" + calculateFactorial(inputValue) + "</p>";
        document.getElementById('function-output').innerHTML = output;
    });
    
    // DOM Interaction - Button click to run loop examples
    document.getElementById('run-loops-btn').addEventListener('click', function() {
        document.getElementById('for-loop-result').innerHTML = demonstrateForLoop();
        document.getElementById('while-loop-result').innerHTML = demonstrateWhileLoop();
    });
    
    // DOM Interaction - Change header text
    document.getElementById('change-text-btn').addEventListener('click', function() {
        let newText = document.getElementById('text-input').value;
        if (newText.trim() !== '') {
            document.querySelector('header h1').textContent = newText;
            document.getElementById('interaction-feedback').innerHTML = 
                `<p>✅ Header text changed to: "${newText}"</p>`;
        } else {
            document.getElementById('interaction-feedback').innerHTML = 
                `<p>❌ Please enter some text first!</p>`;
        }
    });
    
    // DOM Interaction - Toggle theme (bonus interaction)
    document.getElementById('toggle-theme-btn').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        let isDark = document.body.classList.contains('dark-theme');
        document.getElementById('interaction-feedback').innerHTML = 
            `<p>🎨 Theme switched to: ${isDark ? 'Dark' : 'Light'} mode</p>`;
    });
    
    // DOM Interaction - Add items to list (bonus interaction)
    let itemCounter = 1;
    document.getElementById('add-item-btn').addEventListener('click', function() {
        let list = document.getElementById('dynamic-list');
        let newItem = document.createElement('li');
        newItem.textContent = `Dynamic item ${itemCounter} - Added at ${new Date().toLocaleTimeString()}`;
        list.appendChild(newItem);
        itemCounter++;
        
        document.getElementById('interaction-feedback').innerHTML = 
            `<p>➕ Added new item to the list!</p>`;
    });
    
    // DOM interaction - Input field real-time validation
    document.getElementById('calc-input').addEventListener('input', function() {
        let value = this.value;
        if (value && (isNaN(value) || value < 1 || value > 100)) {
            this.style.borderColor = '#e53e3e';
            document.getElementById('function-output').innerHTML = 
                '<p style="color: #e53e3e;">⚠️ Please enter a number between 1 and 100</p>';
        } else {
            this.style.borderColor = '#48bb78';
            if (value) {
                document.getElementById('function-output').innerHTML = 
                    '<p style="color: #48bb78;">✅ Valid input! Click calculate to see results.</p>';
            }
        }
    });
    
    // Show initial feedback
    document.getElementById('interaction-feedback').innerHTML = 
        '<p>🚀 All JavaScript components loaded successfully! Try the interactive features above.</p>';
});

// Function to format date
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
}

// Function to generate random color
function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Console log for debugging
console.log('JavaScript Assignment loaded successfully!');
console.log('Student data:', { studentName, studentAge, currentYear, studentGrades });
console.log('Current date and time:', getCurrentDateTime());
