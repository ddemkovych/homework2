let sum = 0;

let N = Math.floor(+prompt ('перше число',''));
 while(isNaN(N) || !N || !Number.isInteger(N))
    N = +prompt('ціле перше число','');
     
 
let M = Math.floor(+prompt ('друге число',''));
 while(isNaN(M) || N >= M || !M || !Number.isInteger(M))
       M = +prompt('ціле друге число більше ніж перше число' ,'');

 
let skipNumbers = confirm('пропускаємо парні числа ? Ок-(Так) Скасувати -(Ні)','');

   if (skipNumbers){
    for (let i = N; i <= M; i++ ) {

      if ( i % 2 !== 0 ){
        sum += i;
      
     }    
  }    
}
 else{
   for(let i = N; i <= M; i++){
     sum += i;
   }
 }

let results = `
    <b><p>Перше число - ${N}</p>
    <p>Друге число - ${M}</p>
    <P>Результат - ${sum}</p></b>`
document.querySelector( '.results' ).innerHTML = results;

          
