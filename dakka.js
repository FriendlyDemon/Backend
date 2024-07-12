function Boy(name, shoota, dakka) {
    if (dakka != undefined) {
        while (dakka > 0) {
            console.log(name, "shoots", shoota);
            dakka--;
        }
    }
    else {
        console.log(name, "shoots",shoota);
    }
}
Boy("GhazghKull", "Da Big Gun");
