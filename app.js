const express = require('express');
const app = express();
const port = 3000;

//vue.js workshop backend

app.get('/movies', (req, res) => {
  res.json([
    {
        Title: "Spiderman",
        Subtitle:"When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
      },
      {
        Title:"Batman",
        Subtitle:"Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues."
      },
      {
        Title:"Troy",
        Subtitle:"After Paris, a Trojan prince, has an affair with Menelaus's wife, Helen, he decides to take her with him. Later, Menelaus's brother uses that as an excuse to wage a war against the city of Troy."
      },
      {
        Title:"Prince of Persia",
        Subtitle:"Prince of Persia is a video game franchise created by Jordan Mechner. It is built around a series of action-adventure games focused on various incarnations of the eponymous Prince, set in ancient and medieval Iran."
      }
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})