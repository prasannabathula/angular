import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });

  it('testing pipe instance', () => {
    const pipe = new TestPipe();
    expect(pipe.transform(15)).toBe('weak');
  });
});
