
// callback function 

// kono function jokhon nijer kaj ses kore onno kono fucntion ke call  
// kore  take callback funcion ba callback bole

// expample
function karim(name,callback){
     console.log(name);
     callback();
}
function rahim(){
     console.log('rahim');
}
karim('karim',rahim)

// output is : 
// karim 
// rahim
