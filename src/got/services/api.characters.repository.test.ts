import { ApiCharactersRepository } from './api.characters.repository';

describe('Given ApiCharactersRepository class ', () => {
  describe('When we instantiate it', () => {
    const repo = new ApiCharactersRepository('');

    test('The method getAll should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      // const result =
      repo.getAll();
      expect(global.fetch).toHaveBeenCalled();
      // expect(result).toBe('Test');
    });
  });
});
