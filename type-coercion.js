//Works if you're lucky
// const a = {
//   valueOf : function (){
//   if(Math.random() > 0.5){
//     return 2
//   } else { return 3}
//   }
// }

//Works
const a = {
    value: "2", //extra coercion for bantz
    valueOf: function(){
    return this.value++
  }
};

if (a == 2 && a == 3) {
    console.log('How on earth did you get here?');
}
