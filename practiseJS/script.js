const MyBody = {
    heands: 2,
    legs: 2,
    head: 1,
    nameGiven: 'OLga',
    gender: 'Femail'

}
const elements = document.querySelectorAll('.box');
elements[0].innerHTML = MyBody.nameGiven + '' + MyBody.gender;
