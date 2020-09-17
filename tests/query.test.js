import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import { client } from '../utils';
const { getAllGames } = require('../helpers/QueryHelper');

describe('Get all games', () => {

    // Test to see that number of games expected is returned
    it('should return 5 games', async () => {
        const getAllGames = gql`
          {
            games {
              name
            }
          }
          `
        const response = await client.query({
            query: getAllGames
        })
        expect(response.data.games).toHaveLength(5);
    }),

    // Test to see that the game names are as correct
    it('should return the correct game names', async () => {
        const getAllGames = gql`
          {
            games {
              name
            }
          }
          `
        const response = await client.query({
            query: getAllGames
        })
        const gamesList = response.data.games
        expect(gamesList[0].name).toBe("Random Game");
        expect(gamesList[1].name).toBe("Lucky Pots");
        expect(gamesList[2].name).toBe("King of the Spins");
        expect(gamesList[3].name).toBe("Jackpot Dropper");
        expect(gamesList[4].name).toBe("King Kane Cash");
    })
})

describe('Get games by slug', () => {

    // Test to see that the correct game is returned based on the slug provided
    it('should return the correct game by slug', async () => {
        const getGameBySlug = gql`
        {
            gameBySlug(slug: "random-game") {
                name
            }
        }
        `
        const response = await client.query({
            query: getGameBySlug
        })
        expect(response.data.gameBySlug.name).toBe("Random Game");
    }),

    // Test to check an appropriate error message is returned when trying to find game with invalid slug
    it('should throw a valid error message when invalid slug is used', async () => {
        const getGameBySlug = gql`
        {
            gameBySlug(slug: "invalid-game") {
                name
            }
        }
        `
        const response = await client.query({
            query: getGameBySlug
        })

        // Below code to catch the error and check the response body for valid error message
        
    }),
    it('should use helper method', async () => {
        expect(getAllGames.length).toBe(5)
    }),
    it('should return the correct game by helper method', async () => {
        
    })
})