import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import { client } from '../utils';
const { addGameMutation, newGameName, addExistingGame, addGameExistingSlug } = require('../helpers/MutationHelper');


describe('Create new game', () => {
    // Delete game after each test
    // afterEach code would go here if it were possible to delete and clean up games. Dependency on query tests running successfully
    // as it checks for the correct amount of games. This will fail after first run as mutation tests will increase the number of games

    // Test that a new unique game is created
    it('creates a new game successfully', async () => {
        const response = await client.mutate({
            mutation: addGameMutation
        })
        //Grab the ID of the newly created game
        const newGameId = response.data.addGame.id

        // Query game by ID
        const getGameById = gql`
        query {
            game(id: ${newGameId}) {
                name
            }
        }
        `
        // Check to see if game was added
        const gameByIdResponse = await client.query({
            query: getGameById
        })
        expect(gameByIdResponse.data.game.name).toBe(newGameName);
    }),

    //Test to see that you cannot create have 2 games with the same name per supplier
    it('fails to create game with existing name and supplier but unique slug', async () => {
      await expect(client.mutate({
        mutation: addExistingGame
      })).rejects.toThrowError("GraphQL error: The game \"Random Game\" already exists for this supplier! Cannot add this game...");
    }),

    // Test to see that you cannot create have 2 games with the same slug
    it('fails to create game with existing slug', async () => {
      await expect(client.mutate({
        mutation: addGameExistingSlug
      })).rejects.toThrowError("GraphQL error: The slug \"random-game\" already exists! Cannot add this game...");
    })
})