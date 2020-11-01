const vstup = document.getElementById('text');
const btn = document.getElementById('btn');
let textClean;
let textAr;
let complText = 0;

btn.addEventListener('click', function(){
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
            complText += textAr[i];
        }
    }
    console.log(complText);
})

