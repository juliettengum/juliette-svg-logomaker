const { prompt } = require('inquirer');

class InputHandler {
  async getUserInput() {
    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function(input) {
          return input.length > 0 && input.length <= 3;
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):'
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['triangle', 'circle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):'
      }
    ];

    return await prompt(questions);
  }
}

module.exports = InputHandler;
