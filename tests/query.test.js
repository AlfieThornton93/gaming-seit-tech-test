import QueryHelper from '../helpers/queryHelper';

describe('Get all games', () => {
    it('should return 5 games', async () => {
        await QueryHelper.getAllGames();
        expect(getAllGames.games).toHaveLength(5);
    }),
    it('should contain the correct games by name')
});