const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const password3 = document.getElementById("password3");
const password4 = document.getElementById("password4");

function generatePasswords(){
    let pw1 = "";
    let pw2 = "";
    let pw3 = "";
    let pw4 = "";
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 15; j++){
            let randomIndex1 = Math.floor(Math.random() * characters.length);
            if(i === 0)
                pw1 += characters[randomIndex1];
            else if(i === 1)
                pw2 += characters[randomIndex1];
            else if(i === 2)
                pw3 += characters[randomIndex1];
            else pw4 += characters[randomIndex1];
        }
    }
    password1.textContent = pw1;
    password2.textContent = pw2;
    password3.textContent = pw3;
    password4.textContent = pw4;
}

btn1.addEventListener("click", function(){
    generatePasswords();
})

btn2.addEventListener("click", function(){
    generatePasswords();
})