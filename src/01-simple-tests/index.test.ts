// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const res = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Add,
    });

    expect(res).toEqual(3);
  });

  test('should subtract two numbers', () => {
    const res = simpleCalculator({
      a: 2,
      b: 1,
      action: Action.Subtract,
    });

    expect(res).toEqual(1);
  });

  test('should multiply two numbers', () => {
    const res = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Multiply,
    });

    expect(res).toEqual(4);
  });

  test('should divide two numbers', () => {
    const res = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Divide,
    });

    expect(res).toEqual(1);
  });

  test('should exponentiate two numbers', () => {
    const res = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });

    expect(res).toEqual(8);
  });

  test('should return null for invalid action', () => {
    const res = simpleCalculator({
      a: 2,
      b: 3,
      action: 'invalid action',
    });

    expect(res).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const res = simpleCalculator({
      a: 'invalid argument',
      b: 'aoaoa',
      action: Action.Add,
    });
    expect(res).toBe(null);
  });
});
