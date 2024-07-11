function Boy(name, shoota, dakka) {
    if (dakka != undefined) {
        while (dakka > 0) {
            console.log(name, "shoots his", shoota);
            dakka--;
        }
    }
    else {
        console.log(name, "shoots his",shoota);
    }
}
Boy("Ghaz'Kul", "Da Big Gun");
