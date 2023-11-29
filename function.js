    function Display(x){
        console.log(x);
    }
    Display(500);
    
    //Defining a function
    function sayHello(){
        console.log("hello programer")
        console.log("hole you're doing great!")
    }
    //we call the function here
    sayHello()
    
    function print(str){
        if (str != ''){
        return
    }
    console.log (str)
    }
    print("sunksun")
    
    //function definition
    function greeting(name){
        console.log("Good morning"+" "+ name)
        console.log("Programming")

    }
    greeting ()

    //function definition
    function doSum(x,y,z){
        console.log("the sum is")
        console.log(x,y,z)
        console.log("the average is:")
        console.log((x,y,z)/3)
    }
    //function call 
    doSum(10,20,30)

    var car = 'toyte camry';
    function myfunction(){
        var car = Bugatti();
        console.log(car); //car in function scope
    }
    myfunction();

    console.log(car) //caroutside the function scope

    function multiply(num1, num2){
        return num1 * num2;
    }
    let x = 2;
    let y = 3;
    console.log("multiplication of ",x,"and",y,"is",multiply(x,z));