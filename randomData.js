const randomSelectionArr = (fruits) => {
    const randonNumber = Math.floor(Math.random() * fruits.length);
    console.log(fruits.length);
    return fruits[randonNumber];
  };
  
  let fruits_array = ["mango", "papaya", "watermelon", "banana", "grapes"];
  
  console.log(randomSelectionArr(fruits_array));