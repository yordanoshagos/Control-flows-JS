
// 1. Simulatenfailed login attemps if its more than 3
function loginAttempts(maxAttempts){

    while (maxAttempts > 0 && maxAttempts <=3) {
      console.log(`Login attempt ${maxAttempts}`);
      maxAttempts++;
    }
    while (maxAttempts >= 3){
      console.log("Account locked.");
      break;
    }
    }
    loginAttempts(1);
    
    console.log("  "); //for space in between
    
    // 2. logging each vote from an array
    function voting(votes){
    let a = 1;
    do {
      console.log(`Vote ${a}: ${votes[a]}`);
      a++;
    } while (a < votes.length);
    
    console.log("All votes processed.");
    }
    voting(["Yes", "No", "Yes", "Yes", "No"]);
    
    console.log("  "); //for space in between
    
    
    // 3. switching and printing day name from an array of nums
    function allDays(days){
    
    for (let dayNumber of days) {
      let dayName;
      switch (dayNumber) {
        case 1:
          dayName = "Monday";
          break;
        case 2:
          dayName = "Tuesday";
          break;
        case 3:
          dayName = "Wednesday";
          break;
        case 4:
          dayName = "Thursday";
          break;
        case 5:
          dayName = "Friday";
          break;
        case 6:
          dayName = "Saturday";
          break;
        case 7:
          dayName = "Sunday";
          break;
        default:
          dayName = "Invalid Day";
      }
      console.log(`Day ${dayNumber}: ${dayName}`);
    }
    }
    allDays([5, 3, 4, 6, 8, 2, 1, 7]);
    
    console.log("  "); //for space in between
    
    
    // 4. from array of passwords based on length catagorize them to strong and weak.
    function passwordTypes(passwords){
    
    for (const password of passwords) {
      if (password.length >= 8) {
        console.log(`${password}: Strong`);
      } else {
        console.log(`${password}: Weak`);
      }
    }   
    }
    passwordTypes(["now", "password123", "stargirls", "veryLongAndSecure"]);
    
    console.log("  "); //for space in between
    
    // 5. switch greetings based on languages.
    
    function languages(languageIds){
    for (const languageId of languageIds) {
      let greeting;
      switch (languageId) {
        case "en":
          greeting = "Hello";
          break;
        case "fr":
          greeting = "Bonjour";
          break;
        case "sw":
          greeting = "Habari";
          break;
        case "tig":
          greeting = "Selam";
          break;
        case "es":
          greeting = "Hola";
          break;
        default:
          greeting = "Greeting not supported";
      }
      console.log(`${languageId}: ${greeting}`);
    }
    }
    languages(["en", "fr", "sw", "tig", "es"]);
    
    console.log("  "); //for space in between
    
    // 6. loop through an array of temperatures to have a weather dashboard.
    function temperatureTypes(temperatures){
    
    for (const temperature of temperatures) {
      if (temperature > 30) {
        console.log(`${temperature}°C: High heat alert!`);
      } else if (temperature < 15) {
        console.log(`${temperature}°C: Cold alert!`);
      } else {
        console.log(`${temperature}°C: Normal conditions`);
      }
    }   
    }
    temperatureTypes([35, 13, 25, 14, 35]);
    
    console.log("  "); //for space in between
    
    
    // 7.users are queued to register.
    function registrationQueues(registrationQueue){
    
    while (registrationQueue.length > 0) {
      const nextInQueue = registrationQueue.shift();
      console.log(`Registering: ${nextInQueue}`);
    }
    
    console.log("Registration queue is empty.");
    
    }
    registrationQueues(["Merry", "Yordanos", "Hellen", "Dawit"]);
    
    console.log("  "); //for space in between
    
    //8. Students retake a test until they score 50 or more.
    function totScores(scores){
        for(let score of scores){
            if(score >50){
                console.log(`Your score is ${score}, no need to retake.`);  
            }
    else{
    do {
      console.log(`Current score: ${score}, retaking test...`);
      score += 10; 
    } while (score <= 50);
    
    console.log(`Test passed! Final score: ${score}`);
    }  
    }   
    }
    totScores([34,56,78,23,12]);
    