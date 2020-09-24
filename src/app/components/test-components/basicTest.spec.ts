import { addition } from './basicTest';

describe('Addition function', () => {
  it('Should calculate proper value', () => {
    expect(addition(20, 30)).toEqual(50);
  });

  it('Should match string value', () => {
    let word = 'Hello World';
    expect(word).toBe('Hello World');
  });

  it('Should match string value', () => {
    let word = 'Hello World';
    expect(word).toEqual('Hello World');
  });

  it('Should match string value', () => {
    let word = 'Hello World';
    expect(word).toContain('World');
  });

  it('Should match object value', () => {
    let a = { val: 10 };
    let b = { val: 10 };
    expect(a).toEqual(b); // toBe will not work for objects
  });

  it('Should match object value', () => {
    let names = ['amir', 'ankit', 'akshay'];
    expect(names).toContain('amir'); // toBe will not work for objects
  });

  it('Should match object value', () => {
    let names = ['amir', 'ankit', 'akshay'];
    expect(names).toEqual(['amir', 'ankit', 'akshay']); // toBe will not work for objects
  });
});
