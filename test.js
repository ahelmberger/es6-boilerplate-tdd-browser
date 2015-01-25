import greeter from 'greeter';

describe('When the greeter is called with "ECMAScript 6"', () => {
  let result;

  beforeEach(() => result = greeter.greet('ECMAScript 6'))

  it('should return "Hello ECMAScript 6"', () => expect(result).toBe('Hello ECMAScript 6'));
});
