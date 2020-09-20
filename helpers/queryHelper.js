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
// Query to get error by passing invalid slug 
  const getInvalidGameBySlugQuery = gql`
  {
    gameBySlug(slug: "invalid-game") {
      name
    }
  }
  `

// Query to get a game by ID
module.exports = { getAllGamesQuery, getRandomGameBySlugQuery, getInvalidGameBySlugQuery };

    

  

