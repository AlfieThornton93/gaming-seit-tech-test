import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';

// Query to Get list of all Games by name
const getAllGamesQuery = gql`
    {
      games {
        name
      }
    }
    `

// Query to get specific game by slug

  const getRandomGameBySlugQuery = gql`
    {
      gameBySlug(slug: "random-game") {
        name
      }
    }
    `

  const getInvalidGameBySlugQuery = gql`
  {
    gameBySlug(slug: "invalid-game") {
      name
    }
  }
  `

module.exports = { getAllGamesQuery, getRandomGameBySlugQuery, getInvalidGameBySlugQuery };

    

  

