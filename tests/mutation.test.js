import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import { client } from '../utils';
const { addGameMutation, newGameName } = require('../helpers/MutationHelper');


describe('Create new game', () => {
    // Delete game after each test
    // afterEach code would go here if it were possible to delete and clean up games

    // Test that a new unique game is created
    it('creates a new game', async () => {
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
    it('fails to create game with existing name and supplier', async () => {
        const addGame = gql`
        mutation {
            addGame(input: {
              name: "test",
              slug: "test-slug",
              supplier: 1
            }) {
              id
            }
          }
          `
        const response = await client.mutate({
            mutation: addGame
        })
        expect(response.addGame.id).toBe(5);
    }),
    it('adds 2 numbers', async () => {
      const ans = await add2number(1, 1)
      expect(ans).toBe(2);
  }),

    // Test to see that you cannot create have 2 games with the same slug
    it('fails to create game with existing name and supplier', async () => {
        const addGame = gql`
        mutation {
            addGame(input: {
              name: "test",
              slug: "test-slug",
              supplier: 2
            }) {
              id
            }
          }
          `
        const response = await client.mutate({
            mutation: addGame
        })
        expect(response.addGame.id).toBe(5);
    }),
    it('adds 2 numbers', async () => {
      const ans = await add2number(1, 1)
      expect(ans).toBe(2);
  })
})