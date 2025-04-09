document.getElementById('generateBtn').addEventListener('click', function() {
    fetch('/new-player')
      .then(response => response.json())
      .then(data => {
       
        document.getElementById('playerDisplay').textContent = 'New Player: ' + data.name;
        
    
        const playerImg = document.getElementById('playerImage');
        playerImg.src = data.image;
        playerImg.style.display = 'block'; 
      })
      .catch(error => {
        console.error('Greška prilikom dohvaćanja novog igrača:', error);
      });
  });
  
