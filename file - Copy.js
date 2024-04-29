var fs = require("fs");
fs.readFile("./text.txt", "utf8", function (err, data) {
  if (err) {
    console.error(err);
  }

  console.log(data);
});
fs.appendFile("new1.txt","this is a example file 2 ",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created");
    }
);
    
   fs.unlink("./text.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file deleted");
    }
);
    