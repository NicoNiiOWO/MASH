function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids" + ", and you'll drive a " + getCar() + ". Your salary is " + getSalary()

}
console.log(mash());

function getHome(a){
    let home = ["Mansion", "Apartment", "Shack", "House", "Box"];
    if(process.argv[2] != undefined){
        home.push(process.argv[2]);
    }
    home = home[(Math.floor(Math.random() * home.length))];
    return home;
}

function getChildrenCount(){
    let chance = Math.floor((Math.random() * 2));
    if(chance == 0){
        return Math.floor((Math.random() * 101));
    }else if(process.argv[3] != undefined){
        return process.argv[3];
    }else{
        return Math.floor((Math.random() * 101));
    }
}

function getCar(){
    let car = ["Lambo", "Convertible", "Box With Wheels"];
    if(process.argv[4] != undefined){
        car.push(process.argv[4]);
    }
    car = car[(Math.floor(Math.random() * car.length))];
    return car;
}

function getSalary(){
    let salary = Math.floor(Math.random() * 100000);
    let chance = Math.random() * 10;
    if(chance < 1){
        salary += 1000000;
    }else if(chance > 1 && chance < 2){
        salary = salary * -1;
    }else if(chance > 2 && chance < 3){
        salary = salary - 50000;
    }
    salary = "$" + salary + ".";
    return salary;
}