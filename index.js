/*
let v1= "henrique"
v2=v1.at(0).toUpperCase()
v3=v1.slice(1)
console.log(v2+v3)
*/
// new Blob(["this is a test"], "./test.txt")
/*
// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
*/
const fs = require('node:fs');
const content = 'Some content!';
fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});