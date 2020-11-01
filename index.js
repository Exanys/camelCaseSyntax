const vstup = document.getElementById('text');
const btn = document.getElementById('btn');
const vystup = document.getElementById('vysledek');
let textClean;
let textAr;
let complText;
let text

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

btn.addEventListener('click', function(){
    if (vstup.value[0] >= 0 && vstup.value[0] <= 9) {
        vystup.innerHTML = `Nesmi zacinat cislem.`;
    } else {
        textClean = vstup.value.replace(/[^a-zA-Z ]/g, "")
        textAr = textClean.split(' ');
        textAr.forEach(function(value, index){
            if(value == ""){
                textAr.splice(index, 1);
            }
        })
        for(let i = 0; i< textAr.length; i++){
            if(i == 0){
                complText = textAr[0];
            }else{
                text = capitalize(textAr[i]);
                complText += text;
            }
        }
        vystup.innerHTML = `Vysledek: ${complText}`;
        vstup.value = "";
        }

})

