function bmi (){

    var jhon = {
    fname:"john micheal",

    mass:40,
    height:170,
    calcBmi:function(){

    return this.mass / Math.pow(this.height,2)

    }
    }
    var mike = {
    fname:"mike micheal",
    mass:40,
    height:170,
    calcBmi:function(){
    return this.mass / Math.pow(this.height,2)

    }
    }

    console.log( `jhon bmi is ${jhon.calcBmi()} and mike bmi is ${mike.calcBmi()}` )
    if(jhon.calcBmi() > mike.calcBmi() ){
    console.log(`jhon is bigger`)
    }else if (jhon.calcBmi() < mike.calcBmi() ){  console.log(`mike is bigger `) }else{  console.log(`they are
    equal`)  }
    }
    bmi()