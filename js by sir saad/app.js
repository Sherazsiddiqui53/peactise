              //ARRAY
              
        // ARRAY ki pehchan sqare bracket []
     // index 0 say start hoga or lenth 1 say

     // EXAMPLE


        // PUSH akhir say value ko add kar deta hay
        //pop akhir say value ko delete kar deta hay
         // unshift shuru say add karta hay
           // shift shuru say remove kardega


//   var arr = ['Sheraz','Siddiqui',19,true] 
//   arr.push('bachelor in ai')  //last may add kardiya push nay
//  arr.pop()                    // last wala hata diya pop nay
//   document.write([arr])    


      // var arr = ['Siddiqui',19,true] 
      // arr.unshift('Muhammad','Sheraz')
      // document.write(arr)  // start may add kardiya

         // SPLICE 


    // var arr = ['Sheraz','Siddiqui',19,true]
    // arr.splice(2,1)
    // document.write(arr)      //  19 remove kardega qk 2 select kiya hay
 


//  var arr = ['Sheraz','Siddiqui',19,true]
//  arr.splice(0,1,'muhammad majeed')
//  document.write(arr)              // sheraz ki jaga muhammad majeed replace kardega


           // SLICE              copy  karkay deta hay

//  var arr = [1,2,3,4,5,6]
//  var arr2 = arr.slice(0,5)           // arr2 banaya or jo copy karna tha wo 0 say lekar 
//                                       //jaha tak karna tha wo kardiya 
//  console.log(arr2)
             

         //LOOP 
// iteration ek hi kaam ko baar baar repeat karna

// FOR LOOP      ismay pata hota hay k itna kaam karna hay

// while loop may jab tak pura kaam na hojaye loop chalta rehta hay

// do-while loop condition false honay per bhi ek baar loop chalay ga 

// var i;    // isko declare karna kehte hay
// for(i=0)  // isko initialize karna kehte hay

//var i;                   //1 initialization 2 condition 3 increment
//for(i=1; i<=10; i++){          //agar counting lagani hayto i+ lagayga
  //  document.write(i+ ') hello world <br>')
//}             

// var i;
// for(i=10; i>=0; i--){
//     document.write(i+ "<br>")
// }
// *ulti counting*

// bina comma k counting lekin ghalat tarika 

// var arr = [1,2,3,4,5,6,7,8,9,10]
// for(var i=0; i<=9; i++){
//   document.write(arr[i],"<br>")
//}

// uper walay ka sahi tarika
// var arr = [1,2,3,4,5,6,7,8,9,10]
// for(var i=0; i<arr.length; i++){
//   document.write([i],'<br>')
// }

// 2 ka table 

// for(i=1; i<=10; i++){
//   document.write(2+" x " +i+"=" +2*i, "<br>" )
// }



//user ka input lekar table chalana
//  var userinp = +prompt("Enter Any Number")
//  var userinp2 = +prompt("How long")
//  for(i=1; i<=10; i++){
//   document.write(userinp+" x "+i+"="+userinp*1,"<br>")
//  }
 



var arr = ['sheraz','siddiqui','20','soon']
arr.unshift("Muhammad")
document.write(arr)

