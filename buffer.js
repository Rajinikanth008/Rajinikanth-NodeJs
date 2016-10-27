var buffer = new Buffer("hellooo");
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write("pojhfgu");
console.log(buffer.toString());