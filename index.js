const inquirer = require("inquirer");
const fs = require("fs");


function writeFile(fileName, data){
    fs.writeFile (fileName, data, "utf-8", (error) => error? console.error(error):console.log("Sucess!"))
}

function startPrompts(){
    inquirer
    .prompt ([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "Where is your location?",
            name: "location"
        },
        {
            type: "input",
            message: "What is your bio?",
            name: "bio"
        },
        {
            type: "input",
            message: "What is your LinkedIn URL?",
            name: "linkedinURL"
        },
        {
            type: "input",
            message: "What is your GitHub URL?",
            name: "githubURL"
        }
    ])
    .then ((answers)=> {
    const { name, location, bio, linkedinURL, githubURL }  = answers;
    templateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Portfolio Generator</title>
</head>
<body>
    <h1>Name: ${name}</h1>
    <h1>Location: ${location} </h1>
    <p>Bio: ${bio}</p>
    <h2>LinkedIn URL: ${linkedinURL} </h2>
    <h2>Github URL: ${githubURL} </h2>
</body>
</html>`

writeFile("template.html", templateHTML);
});
}
startPrompts()