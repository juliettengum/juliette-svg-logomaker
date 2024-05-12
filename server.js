const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

console.log('Before app.listen');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (e) => {
  console.error(`Error occurred: ${e.message}`);
});

console.log('After app.listen');

  
