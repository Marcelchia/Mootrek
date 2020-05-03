// DOM Manipulation

// var amount = document.getElementById('#amount');

//   console.log("amount")
//     console.log(amount)

//             if( amount < 0) {

//             amount.classList.add('alert');
//         } else {

//             amount.classList.add ('black');
//         };



//   var total = document.querySelector('#total');



//             if( total < 0) {

//             total.classList.add('alert');
//         } else {

//             total.classList.add ('black');
//         };



//          console.log("total")
//         console.log(total)



function confirmpopup() {

    var userval =confirm("Do you wish to continue?");

    if (userval == true){
        alert("you have successfully added!")
    }
    else{ alert("please re-enter again")
    };
}