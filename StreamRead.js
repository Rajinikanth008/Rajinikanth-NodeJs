var fs =  require('fs');

var readable = fs.createReadStream("./sample.txt", 
	{encoding:"utf8", highWaterMark: 16*1024});

var writable = fs.creatWriteStream("./sample.txt")
readable.on("data", function(rajni){

	console.log(rajni.length);
	writable.write(rajni);

});

