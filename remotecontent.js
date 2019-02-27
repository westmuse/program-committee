var replaceWordChars = function(text) {
    var s = text;
    // smart single quotes and apostrophe
    s = s.replace(/[\u2018\u2019\u201A]/g, "\'");
    // smart double quotes
    s = s.replace(/[\u201C\u201D\u201E]/g, "\"");
    // ellipsis
    s = s.replace(/\u2026/g, "...");
    // dashes
    s = s.replace(/[\u2013\u2014]/g, "-");
    // circumflex
    s = s.replace(/\u02C6/g, "^");
    // open angle bracket
    s = s.replace(/\u2039/g, "<");
    // close angle bracket
    s = s.replace(/\u203A/g, ">");
    // spaces
    s = s.replace(/[\u02DC\u00A0]/g, " ");
    // linefeeds and carriage returns
    s = s.replace(/[\r\n]*/g, "");
    return s;
}

var fs = require('fs'); //to access filewrite
       var toMarkdown = require ('to-markdown'); //to convert HTML to Markdown
       var request = require("request"); //to request the JSON file from the server
       var tomlify = require('tomlify-j0.4'); //to add the frontmatter

   //Request options
   var options = {
      method: 'GET',
      json: true,
      url: 'https://gist.github.com/5easypieces/4ce57c27bbbfe7728c81fb6548801b0e/raw/',

     };




   //Request
   request(options, function (error, response, body) {
       if (error) throw new Error(error);

       var obj = body; //The actual JSON from the API
       console.log("Start converting API to files");



      //Split up the JSON response
      console.log(obj.Proposal.length + " total submissions");
      for (var j=0; j<obj.Proposal.length; j++) {


          var myObj = obj.Proposal[j];
          for (var x=0; x<myObj.length; x++) {
            var htmlstring = myObj[x]; //The content that goes into the Markdown part
            if (typeof htmlstring === 'string' || htmlstring instanceof String) {
              var markdowntext = toMarkdown(htmlstring); //The HTML conversion
              console.log("converted!");
            } else {
              var markdowntext = htmlstring;
              console.log("didn't convert");
            }
          }















          // var toFrontmatter = myObj[x];
        //   var toml = tomlify(myObj, {delims: true}, {indent: true});


          var toml = tomlify.toToml(markdowntext, {space: 2});


          var full_proposal = '+++\n' + toml + '\n+++\n';


          // var htmlstring = myObj[x]; //The content that goes into the Markdown part
          // if (typeof htmlstring === 'string' || htmlstring instanceof String) {
          // var markdowntext = toMarkdown(htmlstring); //The HTML conversion

           //delete toFrontmatter['_id']; //Deleting the stuff that I do not need to put into the frontmatter
           //delete toFrontmatter['content'];   //Deleting the stuff that I do not need to put into the frontmatter
           //var obj2 = tomlify(toFrontmatter, {delims: true}); //Creating the frontmatter
           //obj2 = obj2 +"\n" + markdowntext; //Putting it all togeter
          var file = __dirname + '/content/proposals-round2/' + 'WMA2019_SP' + myObj["ID"] +'.md';//I have set up a slug as the file name in my CMS and don't forget to create the directory structure in advance.
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
