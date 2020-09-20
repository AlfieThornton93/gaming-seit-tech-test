import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';

const newGameName = "alfie-test-game";

// Mutation for adding a new game
const addGameMutation = gql`
        mutation {
            addGame(input: {
              name: "${newGameName}",
              slug: "test-game11",
              supplier: 1
            }) {
              id
            }
          }
          `

// Mutation for adding an existing game
const addExistingGame = gql`
    mutation {
        addGame(input: {
           name: "Random Game",
           slug: "random-game-new-slug",
           supplier: 1
        }) {
            id
        }
    }
    `

    const addGameExistingSlug = gql`
    mutation {
        addGame(input: {
          name: "test",
          slug: "random-game",
          supplier: 2
        }) {
          id
        }
      }
      `
module.exports = { addGameMutation, newGameName, addExistingGame, addGameExistingSlug };