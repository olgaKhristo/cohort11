
foodPrise = 8.20;
isPlaseVeget = "no";
isWitvinBuget = (foodPrise <= 10.50);
isVegeterian = (isPlaseVeget == "yes")
if( isWitvinBuget && isVegeterian) {
    console.log("perfect");

}else if(!isWitvinBuget && isVegeterian){
    console.log("when reach")
}else if (isWitvinBuget && !isVegeterian){
    console.log("no vwgan")
}else{
    console.log("somewerre esle")
}


//console.log(Object.values(spotifyPlaylist)[1]);

//var myMum = 0;
//for (var i = 0; i < 9; i++ ) {
//    myMum = myMum +1;
//}
//console.log(myMum);

//function Coffcount(coffe){
   // if(coffe < 3) {
     //   console.log("not enouf cof");
    //}else if (coffe > 2 && coffe < 6) {
       // console.log("too much cof");
    //}else if (coffe > 5) {
       // console.log("dye");
   // }
//}
//Coffcount(5)
