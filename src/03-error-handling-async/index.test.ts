// Uncomment the code below and write your tests
import {
  MyAwesomeError,
  rejectCustomError,
  resolveValue,
  throwCustomError,
  throwError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'hello';
    const resolvedValue = await resolveValue(value);

    expect(resolvedValue).toEqual(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    let errorMessage: string | undefined = undefined;

    try {
      throwError('test');
    } catch (err) {
      errorMessage = (err as Error).message;
    }

    expect(errorMessage).toEqual('test');
  });

  test('should throw error with default message if message is not provided', () => {
    let errorMessage: string | undefined = undefined;

    try {
      throwError();
    } catch (err) {
      errorMessage = (err as Error).message;
    }

    expect(errorMessage).toEqual('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    let receivedError: unknown;

    try {
      throwCustomError();
    } catch (err) {
      receivedError = err;
    }

    expect(receivedError instanceof MyAwesomeError).toBe(true);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    let receivedError: unknown;

    try {
      await rejectCustomError();
    } catch (err) {
      receivedError = err;
    }

    expect(receivedError instanceof MyAwesomeError).toBe(true);
  });
});
