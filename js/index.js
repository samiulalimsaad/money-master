// get ids

// input fields
const incomeNode = document.querySelector("#income");
const foodNode = document.querySelector("#food");
const rentNode = document.querySelector("#rent");
const clothesNode = document.querySelector("#clothes");
const saveNode = document.querySelector("#save");

// texts
const totalExpensesNode = document.querySelector("#totalExpenses");
const balanceNode = document.querySelector("#balance");
const savingAmountNode = document.querySelector("#savingAmount");
const remainingAmountNode = document.querySelector("#remainingAmount");

// Error
const errorMessageNode = document.querySelector("#errorMessage");

// buttons
const calculateButtonNode = document.querySelector("#calculate-button");
const saveButtonNode = document.querySelector("#save-button");

let income;
let food;
let rent;
let clothes;

function makeNumber(str, field = "") {
    const temp = parseFloat(str);
    if (temp === 0) {
        errorMessageNode.innerText = field + " can't be 0";
        return 0;
    } else if (!temp) {
        errorMessageNode.innerText = field + " must be a number";
        return 0;
    } else {
        return temp;
    }
}

calculateButtonNode.addEventListener("click", function (e) {
    income = incomeNode.value;
    food = foodNode.value;
    rent = rentNode.value;
    clothes = clothesNode.value;

    const totalIncome = makeNumber(income, "Income");
    const totalFood = makeNumber(food, "Food");
    const totalRent = makeNumber(rent, "Rent");
    const totalClothes = makeNumber(clothes, "Clothes");
    console.log({ totalIncome, totalFood, totalRent, totalClothes });

    const totalExpense = totalFood + totalRent + totalClothes;
    if (totalExpense > totalIncome) {
        errorMessageNode.innerText = "Expense must be a lower than net income";
        totalExpensesNode.innerText = 0;
        balanceNode.innerText = 0;
    } else {
        totalExpensesNode.innerText = totalExpense;
        balanceNode.innerText = totalIncome - totalExpense;
    }

    // errorMessageNode.innerText = "test";
    // totalExpensesNode.innerText = 5500;
    // balanceNode.innerText = 4500;
    // savingAmountNode.innerText = 2000;
    // remainingAmountNode.innerText = 2500;
});

