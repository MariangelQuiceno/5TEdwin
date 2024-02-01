/* 
So, texto html del Input:

<input type="date" id="inputAge">

*/

let inputDate = document.getElementById('inputAge')

inputDate.addEventListener('input', () => {
    let dateValue = inputDate.value
    let userDate = new Date(dateValue);
    let actualDate = new Date();
    let userAge = actualDate.getFullYear() - userDate.getFullYear();

    if (
        userDate.getMonth() > actualDate.getMonth() || (userDate.getMonth() === actualDate.getMonth() && userDate.getDate() > actualDate.getDate())
    ) {
        userAge--;
    }

    console.log(userAge);
})

