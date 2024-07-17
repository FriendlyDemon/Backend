/*
for(let i=10;i>=0;i--){
    if (i%2==0&&i>1){console.log("TIC")}
    else if (i!=0){console.log("TAC")}
    else{console.log("BOOM")}
}
*/
var ficcao = { "Fundação": "Isaac Asimov", "Duna": "Frank Herbert" };
for (var livro in ficcao) {
    console.log("Autor do livro \"".concat(livro, "\": ").concat(ficcao[livro]));
}
console.log(Object.keys(ficcao)[0]); //volta "Fundação"
