import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';

const newGameName = "alfie-test-game10";

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

module.exports = { addGameMutation, newGameName };