describe('spies', () => {
  const items = ['a', 'b'];
  const callback = jest.fn();

  // You can use test setup/teardown methods to run before/after.
  afterEach(() => {
    // Reset the mocked function's state.
    callback.mockReset();
  });

  beforeEach(() => {
    // Run the same code before each test.
    items.map((item) => callback(item));
  });

  it('is called for each array item', () => {
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('is only called with strings', () => {
    expect(callback).toHaveBeenCalledWith(expect.any(String));
  });

  it('is called with the right arguments', () => {
    expect(callback).toHaveBeenCalledWith('a');
    expect(callback).toHaveBeenLastCalledWith('b');
  })
});
