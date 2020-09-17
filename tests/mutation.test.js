import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import { client } from '../utils';
const { add2number } = require('../helpers/QueryHelper');

describe('Create new game', () => {
    // Setup game before each test
    const newGameName = 'alfie-test-game2';
  
    // Delete game after each test
    // afterEach code would go here if it were possible to delete and clean up games

    // Test that a new unique game is created
    it('creates a new game', async () => {
        const addGame = gql`
        mutation {
            addGame(input: {
              name: "${newGameName}",
              slug: "test-game7",
              supplier: 1
            }) {
              id
            }
          }
          `
        const response = await client.mutate({
            mutation: addGame
        })
        const getGameById = gql`
        query {
            game(id: ${response.data.addGame.id}) {
                name
                id
            }
        }
        `
        const gameByIdResponse = await client.query({
            query: getGameById
        })
        expect(gameByIdResponse.data.name).toBe(newGameName);
    }),

    // Test to see that you cannot create have 2 games with the same name per supplier
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
  })
})