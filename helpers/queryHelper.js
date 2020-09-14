import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import { client } from '../utils';

class QueryHelper {
    // Class containing all queries used for query tests

    async getAllGames() {
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
        return response.data
    }
}