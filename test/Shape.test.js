const { Triangle, Circle, Square } = require('../lib/Shape');

describe('Triangle', () => {
  test('render method should return correct SVG string', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render method should return correct SVG string', () => {
    const circle = new Circle('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('render method should return correct SVG string', () => {
    const square = new Square('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
