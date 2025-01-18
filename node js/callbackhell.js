
// callback hell

// nested callback function ke callback hell boke 

// example : 
setTimeout(() => {
     console.log('Step 1');
     setTimeout(() => {
         console.log('Step 2');
         setTimeout(() => {
             console.log('Step 3');
         }, 1000);
     }, 1000);
}, 1000);

// output is :
//  Step 1     // after one second
//  Step 2     // after two second
//  Step 3     // after three second