import { ApiTasksRepository } from './api.tasks.repository';

describe('Given ApiTasksRepository class ', () => {
  describe('When we instantiate it', () => {
    const repo = new ApiTasksRepository('');

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
