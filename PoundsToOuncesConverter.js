function poundsToOunces(pounds) {
    const conversion = 16;
    let output = (pounds * conversion); 
    return output + " Ounces";
  }
  const result = poundsToOunces(6);
  console.log(result);