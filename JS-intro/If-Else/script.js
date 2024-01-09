// if/else statements

const firstName='Rasim';
const age = 23;
const isStudent = false;
const school = 'university';


              /////////////////////////////////////////////////////////////

// var x = 3;
// var y = 5;

// if(x < y) {
//     console.log('x  y-den kicikdir')
// }
// else{
//     console.log('x  y-den boyukdur')
// }


              /////////////////////////////////////////////////////////////


// if(firstName === 'Rasim'){
//     console.log('Salam Rasim');
// }

// if (age === 23){
//     console.log('yas 23');
// }

// if (isStudent){
//     console.log('Salam Telebe');
// }
// else{
//     console.log('Netersen');
// }


//               /////////////////////////////////////////////////////////////

            //   1 ci ancaq schoolu yoxla sonra ikisinide yoxla
if (age >= 18){

        // (school == 'university')

    if ((school == 'university') || (school == 'high school')){
        console.log('Prava ala bilersen');

    } else{
        console.log('Tehsil kifayetsiz');
    }

}



              /////////////////////////////////////////////////////////////


// if (age > 0  && age < 12 ){
//     console.log(`${firstName} is a child`);
// }else if (age >= 13 && age <= 19){
//     console.log(`${firstName} is a teenager`);
// }else{
//     console.log(`${firstName} is an adult`);
// }


              /////////////////////////////////////////////////////////////


// var result = prompt("who's there ? ");

// if(result == 'cancel'){
//     console.log('cancelled');


// }
// else if(result == 'Admin'){

//     var password = prompt('Enter your password : ');

//     if(password =='cancel'){
//         console.log('cancelled');

//     }else if(password == '1234'){
//         console.log('welcome Admin');

//     }else{
//         console.log('wrong password');
//     }

// }else{
//     console.log('I dont know you');
// }



              /////////////////////////////////////////////////////////////


// var saat = new Date().getHours();

// if( (6 < saat) && (saat < 12)){ 
     
//     console.log('Good Morning.. ');

// }

// else if ((saat >= 12) && (saat < 18)){

//     console.log('Good AfterNoon.. ');

// }

// else if ((saat >= 18) && (saat < 23)){

//     console.log('Good Evening.. ');

// }

// else{
//     console.log('Good Night.. ');
// }
