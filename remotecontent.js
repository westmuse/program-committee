var fs = require('fs'); //to access filewrite
       var toMarkdown = require ('to-markdown'); //to convert HTML to Markdown
       var request = require("request"); //to request the JSON file from the server
       var tomlify = require('tomlify-j0.4'); //to add the frontmatter
        var jsesc = require('jsesc');

   //Request options
   var options = {
      method: 'GET',
      json: true,
      url: 'https://gist.github.com/5easypieces/982158a2df83f2912ba5d27a9d9a44c7/raw/',

     };

     function cleanstring(dirty){
       var smartchr = [ "’","‘","“","”","–","—","…",'„', '‚' , '«','»', '‹', '›'];
       var correctchr = ["'", "'", '"', '"', '-', '-', '...', '"', "'", '"', '"', "'", "'"];
        var thestring = dirty;
       var regex;
       for (var i = 0; i < smartchr.length; i++) {
          regex = new RegExp(smartchr[i], "g");
          thestring = thestring.replace(regex, correctchr[i]);
        }
         return thestring;
       }

   //Request
   request(options, function (error, response, body) {
       if (error) throw new Error(error);


       var obj = body;


       console.log("Start converting API to files");



      //Split up the JSON response
      console.log(obj.Proposal.length + " total submissions");
      for (var j=0; j<obj.Proposal.length; j++) {









        var stringified = JSON.stringify(obj.Proposal[j] );









        var escaped = cleanstring(stringified)
        console.log(escaped);
        var myObj = JSON.parse(escaped);


        console.log(myObj);



















          // var toFrontmatter = myObj[x];
        //   var toml = tomlify(myObj, {delims: true}, {indent: true});
          var toml = tomlify.toToml(myObj, {space: 2});


          var full_proposal = '+++\n' + toml + '\n+++\n';


          // var htmlstring = myObj[x]; //The content that goes into the Markdown part
          // if (typeof htmlstring === 'string' || htmlstring instanceof String) {
          // var markdowntext = toMarkdown(htmlstring); //The HTML conversion

           //delete toFrontmatter['_id']; //Deleting the stuff that I do not need to put into the frontmatter
           //delete toFrontmatter['content'];   //Deleting the stuff that I do not need to put into the frontmatter
           //var obj2 = tomlify(toFrontmatter, {delims: true}); //Creating the frontmatter
           //obj2 = obj2 +"\n" + markdowntext; //Putting it all togeter
          var file = __dirname + '/content/proposals-round2/' + myObj["ID"] +'.md';//I have set up a slug as the file name in my CMS and don't forget to create the directory structure in advance.
           fs.writeFile(file, full_proposal, function (err) {  //writing it out to the filesystem
                if (err) {
                    console.error(err);
                } else {
                    console.log("Done converting API", myObj["ID"]);
                }
           });

      }
  //  }
        console.log("Skipped that loop");
     });
