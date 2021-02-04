const express = require("express");
const fsHandler = require("fs").promises;

const app = express();

app.get("/", (request, response) => {
  response.send("WASSUPPPPPPPPPPPPPPP!!!!!!!!!!!!!!!!");
});

app.get("/characters", (request, response) => {
  fsHandler
    .readFile(__dirname + "/characters.json", {
      encoding: "utf-8",
    })
    .then((response) => JSON.parse(response))
    .then((characters) => {
      response.send(characters);
    })
    .catch((error) => console.log(error.message));
});

app.get("/characters/:characterId", (request, response) => {
  fsHandler
    .readFile(__dirname + "/characters.json", {
      encoding: "utf-8",
    })
    .then((response) => JSON.parse(response))
    .then((characters) => {
      response.send(
        characters.find(
          (character) => character.id === request.params.characterId
        )
      );
    })
    .catch((error) => console.log(error.message));
});

app.listen("9000");
