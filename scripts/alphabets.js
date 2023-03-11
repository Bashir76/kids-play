/* function difine Photos */
function show() {
      let image = document.getElementById("image");
    }
 /* function display sentences and  photos */
function play(str) {
        if (str === "a" || str === "A") {
          document.getElementById('display').innerText = "A is for Apple",
          image.src = "./images/alphabets/A.jpg"
        document.getElementById("a");
        } 
else if (str === "b" || str === "B") {
          document.getElementById('display').innerText = "B is for Ball",
          image.src = "./images/alphabets/B.jpg"
        document.getElementById("a");
        } 
else if (str === "c" || str === "C") {
          document.getElementById('display').innerText = "C is for Cap",
          image.src = "./images/alphabets/C.jpg"
        document.getElementById("a");
        } 
else if (str === "d" || str === "D") {
          document.getElementById('display').innerText = "D is for Dog",
          image.src = "./images/alphabets/D.jpg"
        document.getElementById("a");
        } 
else if (str === "e" || str === "E") {
          document.getElementById('display').innerText = "E is for Egg",
          image.src = "./images/alphabets/E.jpg"
        document.getElementById("a");
        } 
else if (str === "f" || str === "F") {
          document.getElementById('display').innerText = "F is for Fan",
          image.src = "./images/alphabets/F.jpg"
        document.getElementById("a");
        } 
else if (str === "g" || str === "G") {
          document.getElementById('display').innerText = "G is for Goat",
          image.src = "./images/alphabets/G.jpg"
        document.getElementById("a");
        } 
else if (str === "h" || str === "H") {
          document.getElementById('display').innerText = "H is for Horse",
          image.src = "./images/alphabets/H.jpg"
        document.getElementById("a");
        } 
else if (str === "i" || str === "I") {
          document.getElementById('display').innerText = "I is for Ink",
          image.src = "./images/alphabets/I.jpg"
        document.getElementById("a");
        } 
else if (str === "j" || str === "J") {
          document.getElementById('display').innerText = "J is for Jug",
          image.src = "./images/alphabets/J.jpg"
        document.getElementById("a");
        } 
else if (str === "k" || str === "k") {
          document.getElementById('display').innerText = "K is for Kettle",
          image.src = "./images/alphabets/K.jpg"
        document.getElementById("a");
        } 
else if (str === "l" || str === "L") {
          document.getElementById('display').innerText = "L is for Lamp",
          image.src = "./images/alphabets/L.jpg"
        document.getElementById("a");
        } 
else if (str === "m" || str === "M") {
          document.getElementById('display').innerText = "Mango",
          image.src = "./images/alphabets/M.jpg"
        document.getElementById("a");
        } 
else if (str === "n" || str === "N") {
          document.getElementById('display').innerText = "N is for Nail",
          image.src = "./images/alphabets/N.jpg"
        document.getElementById("a");
        } 
else if (str === "o" || str === "O") {
          document.getElementById('display').innerText = "O is for Onion",
          image.src = "./images/alphabets/O.jpg"
        document.getElementById("a");
        } 
else if (str === "p" || str === "P") {
          document.getElementById('display').innerText = "P is for Pencil",
          image.src = "./images/alphabets/P.jpg"
        document.getElementById("a");
        } 
else if (str === "q" || str === "Q") {
          document.getElementById('display').innerText = "Q is for Queen",
          image.src = "./images/alphabets/Q.jpg"
        document.getElementById("a");
        } 
else if (str === "r" || str === "R") {
          document.getElementById('display').innerText = "R is for Rabbit",
          image.src = "./images/alphabets/R.jpg"
        document.getElementById("a");
        } 
else if (str === "s" || str === "S") {
          document.getElementById('display').innerText = "S is for Snail",
          image.src = "./images/alphabets/S.jpg"
        document.getElementById("a");
        } 
else if (str === "t" || str === "T") {
          document.getElementById('display').innerText = "T is for Telvition",
          image.src = "./images/alphabets/T.jpg"
        document.getElementById("a");
        } 
else if (str === "u" || str === "U") {
          document.getElementById('display').innerText = "U is for Umbrella",
          image.src = "./images/alphabets/U.jpg"
        document.getElementById("a");
        }  
else if (str === "v" || str === "V") {
          document.getElementById('display').innerText = "V is for Van",
          image.src = "./images/alphabets/V.jpg"
        document.getElementById("a");
        } 
else if (str === "w" || str === "W") {
          document.getElementById('display').innerText = "W is for Watch",
          image.src = "./images/alphabets/W.jpg"
        document.getElementById("a");
        } 
else if (str === "x" || str === "X") {
          document.getElementById('display').innerText = "X is for Xylophone",
          image.src = "./images/alphabets/X.jpg"
        document.getElementById("a");
        } 
else if (str === "y" || str === "Y") {
          document.getElementById('display').innerText = "Y is for Yam",
          image.src = "./images/alphabets/Y.jpg"
        document.getElementById("a");
        } 
else if (str === "z" || str === "Z") {
          document.getElementById('display').innerText = "Z is for Zebra",
          image.src = "./images/alphabets/Z.jpg"
        document.getElementById("a");
        }
        var audio = document.getElementById(str);
        audio.play();
      }
/* function for button sounds play */
      window.document.onkeyup = function(event) {
        let keystroke = event.key
        if (keystroke === "a" || keystroke === "A") {
          play("A");
        } else if (keystroke === "b" || keystroke === "B") {
          play("W");
        } else if (keystroke === "c" || keystroke === "C") {
          play("E");
        } else if (keystroke === "d" || keystroke === "D") {
          play("A");
        } else if (keystroke === "e" || keystroke === "E") {
          play("S");
        } else if (keystroke === "f" || keystroke === "F") {
          play("D");
        } else if (keystroke === "g" || keystroke === "G") {
          play("Z");
        } else if (keystroke === "h" || keystroke === "H") {
          play("X");
        } else if (keystroke === "i" || keystroke === "I") {
          play("C");
        } else if (keystroke === "j" || keystroke === "J") {
          play("W");
        } else if (keystroke === "k" || keystroke === "K") {
          play("E");
        } else if (keystroke === "l" || keystroke === "L") {
          play("A");
        } else if (keystroke === "m" || keystroke === "M") {
          play("S");
        } else if (keystroke === "n" || keystroke === "N") {
          play("D");
        } else if (keystroke === "o" || keystroke === "O") {
          play("Z");
        } else if (keystroke === "p" || keystroke === "P") {
          play("X");
        } else if (keystroke === "q" || keystroke === "Q") {
          play("C");
       } else if (keystroke === "r" || keystroke === "R") {
          play("W");
        } else if (keystroke === "s" || keystroke === "S") {
          play("E");
        } else if (keystroke === "t" || keystroke === "T") {
          play("A");
        } else if (keystroke === "u" || keystroke === "U") {
          play("S");
        } else if (keystroke === "v" || keystroke === "V") {
          play("D");
        } else if (keystroke === "w" || keystroke === "W") {
          play("Z");
        } else if (keystroke === "x" || keystroke === "X") {
          play("X");
        } else if (keystroke === "y" || keystroke === "Y") {
          play("C");
        } else if (keystroke === "z" || keystroke === "Z") {
           play("C");
        }
      }
