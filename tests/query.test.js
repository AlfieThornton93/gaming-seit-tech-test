import 'cross-fetch/polyfill';
import { client } from '../utils';
const { getAllGamesQuery, getRandomGameBySlugQuery, getInvalidGameBySlugQuery } = require('../helpers/QueryHelper');

describe('Get all games', () => {

    // Test to see that number of games expected is returned
    it('should return 5 games', async () => {
        const response = await client.query ({
            query: getAllGamesQuery
        })
        expect(response.data.games).toHaveLength(5);
    }),

    // Test to see that the game names are as correct
    it('should return the correct game names', async () => {
        const response = await client.query ({
            query: getAllGamesQuery
        })
        expect(response.data.games[0].name).toBe("Random Game");
        expect(response.data.games[1].name).toBe("Lucky Pots");
        expect(response.data.games[2].name).toBe("King of the Spins");
        expect(response.data.games[3].name).toBe("Jackpot Dropper");
        expect(response.data.games[4].name).toBe("King Kane Cash");
    })
})

describe('Get games by slug', () => {

    // Test to see that the correct game is returned based on the slug provided
    it('should return the correct game by slug', async () => {
        const response = await client.query({
            query: getRandomGameBySlugQuery
        })
        expect(response.data.gameBySlug.name).toBe("Random Game");
    }),

    // Test to check an appropriate error message is returned when trying to find game with invalid slug
    it('should throw an error message when invalid slug is used', async () => {
        await expect(client.query({
            query: getInvalidGameBySlugQuery
        })).rejects.toThrowError("Cannot return null for non-nullable field Game.name")
    })
        // Below code to catch the error and check the response body for valid error message
})