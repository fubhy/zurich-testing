// Tell jest to use a manual mock for the ./request module.
jest.mock('./request');

// This getUserName() function will now use the mocked ./request module.
import { getUserName } from './index';

describe('fetching users', () => {
  // The assertion for a promise must be returned.
  it('works with promises', () => {
    expect.assertions(1);
    return getUserName(1).then(data => {
      expect(data).toEqual('Mark');
    });
  });

  // You can use .resolves to make it less verbose. When using
  // .resolves, the assertion will fail if the promise is rejected.
  it('works with promises using resolves', () => {
    expect.assertions(1);
    return expect(getUserName(1)).resolves.toEqual('Mark');
  });

  // You can also use async/await syntax.
  it('works with async/await', async () => {
    const data = await getUserName(1);
    expect(data).toEqual('Mark');
  });

  // Even more concise using async/await and .resolves.
  it('works with async/await using resolves', async () => {
    await expect(getUserName(1)).resolves.toEqual('Mark');
  });

  // If you want to test failing code paths, you must assert the number
  // of called assertions. Otherwise, resolved promises will not fail
  // because they do not reach the 'catch' statement.
  it('fails when querying for a non-existent user', () => {
    expect.assertions(1);

    return getUserName(3).catch(error => {
      expect(error.message).toEqual('User with id 3 not found.');
    });
  });

  // Testing failures also works with async/await.
  it('fails when querying for a non-existent user', async () => {
    expect.assertions(1);

    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with id 3 not found.');
    };
  });

  // Testing failures with more concise syntax.
  it('fails when querying a non-existent user with rejects.', async () => {
    expect.assertions(1);

    // There is also a toThrow() assertion which currently doesn't
    // work with async/await however.
    await expect(getUserName(3)).rejects.toHaveProperty(
      'message', 'User with id 3 not found.',
    );
  });
});
