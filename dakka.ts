function Boy(name:string, shoota:string, dakka?:number) {
    if (dakka!=undefined){
        while(dakka>0){console.log(name,"shoots his",shoota); dakka--}
    } else {console.log(name,"shoots!")}
}
Boy("Ghaz'Kul","Da Big Gun",5)