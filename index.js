/* 
PASSWORD RULES
    1 min length = 8 characters
    2 contains at least one upper case character
    3 contains at least one lower case character
    4 contains at least one special character (specify which here?)
    5 contains at least one number

    - Possible additional rules
        - should not contain
            - name
            - email
            - simple passwords (user123, admin123, password123, test123 etc) 

PASSWORD CATEGORIES
    - Strong
    - Medium
    - Weak


*/
 
/*
TESTS
    //Test code to prove that js is linked to html file and working:

    alert("JavaScript is working!");
    console.log("Script loaded!"); 

    console.log('Test')
*/

// ---------------PW CHECKING FUNCTION-----------

function pwdCheck (pwd) {

    //Check (Guard clause) : if password is empty or null ---
    if (!pwd) {
        console.log("Invalid - please enter a valid password")
        return
    }
    

    // --- Check 1: min length = 8 characters ---
    if (pwd.length >= 8) {
        console.log("Minimum 8 characters 8️⃣ ✅")
    } else {
        console.log("Minimum 8 characters not met 8️⃣ ❌")
    }
    
     // --- Check 3: contains at least one lower case character ---
    let hasLowerCase = false
     for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]
        console.log(char) //added to test
        if (char >= 'a' && char <= 'z') {
            hasLowerCase = true
            break
        }
    }
    
    if (hasLowerCase) {
        console.log("Contains one lower case character  ✅")
    } else {
        console.log("Must contain one lower case character ❌")
    }


    // --- Check 5: contains at least one number ---
    const digits = ['1', '2', '3', '4', '5', '6','7', '8', '9']

        //a) iterate through characters in password string
        let containsDigit = false //creating this boolean variable is important
        for (let i = 0; i < pwd.length; i++) {
    
        //b) check if character is in digits array
        if(digits.includes(pwd[i])) {
            console.log('Contains at least one number 1️⃣ ✅')
            containsDigit = true // the boolean variable is changed 
            break                //as soon as a number is found further loop iterations are stopped
            } 
        }          //complete loop, is containsDigitf alse? note scope {} 

        if (!containsDigit) { //if false then pw fails to meet criteria 
            console.log("Does not contain at least one number 1️⃣ ❌")
        }
    }

   



const pwd = prompt("Enter your password")
console.log(pwd)

pwdCheck(pwd)














    




