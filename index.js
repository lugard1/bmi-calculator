const btnEl = document.getElementById('btn')
const resultEl = document.getElementById('result');
let weightConditionEl = document.getElementById('weight-condition');

btnEl.addEventListener('click', computeBMI)

function computeBMI(){
  const heightEl = document.getElementById('height').value / 100;
  const weightEl = document.getElementById('weight').value;

  let bmi = (weightEl / (heightEl ** 2))
  resultEl.value = bmi.toFixed(2);

  if(bmi < 18.5){
    weightConditionEl.innerText = 'Underweight';
  }else if(bmi >= 18.5 && bmi <= 24.9){
    weightConditionEl.innerText = 'healthy range';
  }else if(bmi >= 25 && bmi <= 29.9){
    weightConditionEl.innerText = 'overweight';
  }else if(bmi >= 30){
    weightConditionEl.innerText = 'obesity'
  }
  
}