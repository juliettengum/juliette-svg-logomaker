const { Triangle, Circle, Square } = require('./lib/Shape');
const InputHandler = require('./lib/InputHandler');
const FileWriter = require('./lib/FileWriter');
const http = require('http');
const fs = require('fs');

async function startApp() {
  const inputHandler = new InputHandler();
  const userInput = await inputHandler.getUserInput();

  const { text, textColor, shapeType, shapeColor } = userInput;

  let shape;
  switch (shapeType) {
    case 'triangle':
      shape = new Triangle(shapeColor);
      break;
    case 'circle':
      shape = new Circle(shapeColor);
      break;
    case 'square':
      shape = new Square(shapeColor);
      break;
    default:
      throw new Error('Invalid shape type');
  }

  const svgContent = shape.render();
  const logoSvg = wrapInSvgElement(svgContent, text, textColor, shape);

  const fileWriter = new FileWriter();
  fileWriter.writeToFile('logo.svg', logoSvg);

  console.log('Generated logo.svg');

  // Start a simple HTTP server to serve the SVG file
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    const svgFile = fs.createReadStream('./logo.svg');
    svgFile.pipe(res);
  });

  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
    console.log('Open the browser and navigate to http://localhost:3000/logo.svg to view the logo.');
  });
}

function wrapInSvgElement(svgContent, text, textColor, shape) {
  let textX, textY;

  // Calculate text position based on shape type
  if (shape instanceof Triangle) {
    textX = 150; // Center of the SVG
    textY = 100; // Center of the SVG
  } else if (shape instanceof Circle) {
    textX = 150; // Center of the SVG
    textY = 100; // Center of the SVG
  } else if (shape instanceof Square) {
    textX = 150; // Center of the SVG
    textY = 100; // Center of the SVG
  } else {
    throw new Error('Invalid shape type');
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${svgContent}
      <text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-size="48">${text}</text>
    </svg>
  `;
}

startApp();
