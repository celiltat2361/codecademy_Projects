let input = "a whale of a deal!";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for(let i=0; i < input.length; i++){
    //console.log(input[i]);
    for(let j=0; j < vowels.length; j++){
       // console.log('j is' + j);
       if(input[i] === vowels[j]){
           if(vowels[j] === 'e'){
               resultArray.push('ee');
           } else if (vowels[j] === 'u'){
               resultArray.push('uu')
           }else{
            resultArray.push(input[i]);
           }
        
    }
    
    }
    
}
console.log(resultArray.join('').toUpperCase());