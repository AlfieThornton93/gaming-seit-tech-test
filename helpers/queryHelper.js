import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import { client } from '../utils';

const add2number = (num1, num2) => num1 + num2;


const getAllGames = () => {
  const games = gql`
    {
      games {
        name
      }
    }
    `
  const response = client.query({
      query: games
  })
  return response.data.games
}
module.exports = { add2number, getAllGames };

    

  //   async getGameBySlug(slug) {
  //     const getGameBySlug = gql`
  //       {
  //           gameBySlug(slug: ${slug}) {
  //               name
  //           }
  //       }
  //       `
  //       const response = await client.query({
  //           query: getGameBySlug
  //       })
  //       return response.data
  //   }
  // }
