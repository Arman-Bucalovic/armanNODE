const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


const players = [
  { name: "Lionel Messi", image: "images/messi.png" },
  { name: "Cristiano Ronaldo", image: "images/ronaldo.png" },
  { name: "Neymar Jr.", image: "images/neymar.png" },
  { name: "Kylian Mbappe", image: "images/mbappe.png" },
  { name: "Kevin De Bruyne", image: "images/debruyne.png" },
  { name: "Robert Lewandowski", image: "images/lewandowski.png" },
  { name: "Erling Haaland", image: "images/haaland.png" },
  { name: "Mohamed Salah", image: "images/salah.png" },
  { name: "Luka Modrić", image: "images/modric.png" }
];


app.get('/new-player', (req, res) => {
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  res.json(randomPlayer);
});


app.listen(PORT, () => {
  console.log(`Server radi na portu ${PORT}`);
});
