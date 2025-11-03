/* 
PASSWORD RULES
    1 min length = 8 characters
    2 contains at least one upper case character
    3 contains at least one lower case character
    4 contains at least one special character (! # $ % & * +) CHECK THESE
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
        document.getElementById('invalid-pw-alert').style.display = 'block'
        //console.log("Invalid - please enter a valid password")
        return
    }
    
    // --- Check 1: min length = 8 characters ---
    if (pwd.length >= 8) {
        document.getElementById('length-check').innerText = '✅'
        document.getElementById('length-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('length-check').innerText = '❌'
        document.getElementById('length-check-container').classList.add('list-group-item-danger')
    }
    
     // --- Check 3: contains at least one lower case character ---
    let hasLowerCase = false
    let hasUpperCase = false
    let hasNumber = false
    let hasSpecChar = false

     for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i]
        console.log(char) //NOTE only added to test code in console - can be removed

    // --- Check 3: contains at least one lower case character ---
        if (char >= 'a' && char <= 'z') {  //ASCII codes 97 - 122
            hasLowerCase = true
        }

        //--- Check 2: contains at least one upper case character ---
        if (char >= 'A' && char <= 'Z') {   ////ASCII codes 65 - 90
            hasUpperCase = true
        }   

        //--- Check 5: contains at least one number ---
        if (char >= '0' && char <= '9') {   ////ASCII codes 48 - 57
            hasNumber = true
        }   

        //--- Check 4: contains at least one special character ( # $ % & ) ---
        if (char >= '!' && char <= '/'|| char >= ':' && char <= '@') {   //ASCII codes 33-47 & 58 -64
            hasSpecChar = true
        } 
    }
    
    if (hasLowerCase) {
        document.getElementById('lowercase-check').innerText = '✅'
        document.getElementById('lowercase-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('lowercase-check').innerText = '❌'
        document.getElementById('lowercase-check-container').classList.add('list-group-item-danger')
    }

    if (hasUpperCase) {
        document.getElementById('uppercase-check').innerText = '✅'
        document.getElementById('uppercase-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('uppercase-check').innerText = '❌'
        document.getElementById('uppercase-check-container').classList.add('list-group-item-danger')
    }

    if (hasNumber) {
        document.getElementById('number-check').innerText = '✅'
        document.getElementById('number-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('number-check').innerText = '❌'
        document.getElementById('number-check-container').classList.add('list-group-item-danger')
    }

    if (hasSpecChar ) {
        document.getElementById('specialchar-check').innerText = '✅'
        document.getElementById('specialchar-check-container').classList.add('list-group-item-success')
    } else {
        document.getElementById('specialchar-check').innerText = '❌'
        document.getElementById('specialchar-check-container').classList.add('list-group-item-danger')
    }

}

/* NOTE - UNCOMMENT THE CODE BELOW TO MAKE THE PASSWORD CHECKER WORK */

const pwd = prompt("Enter your password")
//console.log(pwd)
pwdCheck(pwd)  





    /*
        # ADDITIONAL NOTES 

        1.  Alterntive code for checking for numbers below:

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


        2.  ASCII code information at:
       
            https://www.w3schools.com/charsets/ref_html_ascii.asp 
            
            This lists all character codes and reference will explain why the ASCII codes are important in the ordering of the checks in the loop

    */











    




