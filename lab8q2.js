console.log ('lab8q2');

for (var x=70; x<=100; x++) {
        if (x % 2 === 0 && x >= 93) {
                console.log(x +  " Grade A");
        }
        else if (x % 2 === 0 && x < 93 && x >= 88) {
                console.log(x + " Grade AB");   
        }
        else if (x % 2 === 0 && x < 88 && x >= 83) {
                console.log(x + " Grade B");   
        }
        else if (x % 2 === 0 && x < 83) {
                console.log(x + " Below average");   
        }
}
