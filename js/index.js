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
const errorMessageSectionNode = document.querySelector("#errorMessageSection");
const errorMessageNode = document.querySelector("#errorMessage");
const errorCloseButtonNode = document.querySelector("#errorCloseButton");
errorMessageSectionNode.style.display = "none";

// buttons
const calculateButtonNode = document.querySelector("#calculate-button");
const saveButtonNode = document.querySelector("#save-button");

let totalIncome = 0;
let totalBalance = 0;
let totalFood = 0;
let totalRent = 0;
let totalClothes = 0;

// string to number conversion with validation
function makeNumber(str, field = "") {
    const temp = parseFloat(str);
    if (temp === 0) {
        showErrorMessage(field + " can't be 0");
        return 0;
    } else if (temp < 0) {
        showErrorMessage(field + " can't be negative");
        return 0;
    } else if (!temp) {
        showErrorMessage(field + " must be a number");
        return 0;
    } else {
        return temp;
    }
}

// hide error message handler
errorCloseButtonNode.addEventListener("click", function (e) {
    errorMessageSectionNode.style.display = "none";
});

// show error message handler
function showErrorMessage(message) {
    errorMessageSectionNode.style.display = "flex";
    errorMessageNode.innerText = message;
}

//  calculate income, food, rent, clothes
calculateButtonNode.addEventListener("click", function (e) {
    const income = incomeNode.value;
    const food = foodNode.value;
    const rent = rentNode.value;
    const clothes = clothesNode.value;

    totalIncome = makeNumber(income, "Income");
    totalFood = makeNumber(food, "Food");
    totalRent = makeNumber(rent, "Rent");
    totalClothes = makeNumber(clothes, "Clothes");

    const totalExpense = totalFood + totalRent + totalClothes;
    if (totalExpense > totalIncome) {
        showErrorMessage("Expense must be a lower than net income");
        totalExpensesNode.innerText = 0;
        balanceNode.innerText = 0;
    } else {
        totalExpensesNode.innerText = totalExpense;
        balanceNode.innerText = totalIncome - totalExpense;
        totalBalance = totalIncome - totalExpense;
    }
});

// savings calculation
saveButtonNode.addEventListener("click", function (e) {
    const savingsPercentage = saveNode.value;
    const temp = makeNumber(savingsPercentage, "Saving percentage");
    const savings = (totalIncome * temp) / 100;
    if (savings > totalIncome) {
        showErrorMessage("Savings must be a lower than net income");
        errorMessageSectionNode.style.display = "flex";
        savingAmountNode.innerText = 0;
        remainingAmountNode.innerText = 0;
    } else {
        savingAmountNode.innerText = savings;
        remainingAmountNode.innerText = totalBalance - savings;
    }
});
