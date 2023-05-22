const planChangeButton = document.querySelector("#change-btn");
const selectedPlan = document.querySelector("#selected-plan");
const pricing = document.querySelector("#pricing");
const totalPricing = document.querySelector("#total-pricing");
const advancedPlan = "Advanced";
const proPlan = "Pro";
planChangeButton.addEventListener("click", function () {
  if (selectedPlan.textContent == "Arcade (Monthly)") {
    selectedPlan.textContent = advancedPlan + " " + "(Monthly)";
    pricing.textContent = 12;
    totalPricing.textContent = 15;
    return;
  } else if (selectedPlan.textContent == "Advanced (Monthly)") {
    selectedPlan.textContent = proPlan + " " + "(Monthly)";
    pricing.textContent = 15;
    totalPricing.textContent = 18;
  } else {
    selectedPlan.textContent = "Arcade" + " " + "(Monthly)";
    pricing.textContent = 9;
    totalPricing.textContent = 12;
  }
});
