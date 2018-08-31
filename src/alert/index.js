function df() {

}

df.prototype = {
    name: [123,123]
}

var a = new df();
var b = new df();

a.name.push('123234234');

console.log(b.name);