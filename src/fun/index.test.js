// You can use xit / fit to ignore or focus on specific tests.
describe('fun with numbers', () => {
  // This test fails be cause 0.2 + 0.1 is actually
  // 0.30000000000000004 in JavaScript. ¯\_(ツ)_/¯
  xit('weirdly fails with floating point numbers', () => {
    expect(0.2 + 0.1).toBe(0.3);
  });

  // ... So we got toBeCloseTo() for convenience. ¯\_(ツ)_/¯
  it('properly asserts floating point number operations', () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  });
});
