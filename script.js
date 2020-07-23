let sum = 0;

let N = Math.floor(+prompt ('перше число',''));
 while(isNaN(N) || !N || !Number.isInteger(N))
    N = +prompt('ціле перше число','');
     
 
let M = Math.floor(+prompt ('друге число',''));
 while(isNaN(M) || N>=M || !M || !Number.isInteger(M))
       M = +prompt('ціле друге число більше ніж перше число' ,'');

 
let skipNumbers = confirm ('пропускаємо парні числа ? Ок-(Так) Скасувати -(Ні)','');

  while ( N <= M )
{
      if (skipNumbers)
    {
      if ( N % 2 ===0 )    
      {
    
      N ++;
      continue;

      }    
    }
      sum += N;
       N ++;
};


let results = `
    <b><p>Перше число - ${N}</p>
    <p>Друге число - ${M}</p>
    <P>Результат - ${sum}</p></b>`
document.querySelector( '.results' ).innerHTML = results;

          
