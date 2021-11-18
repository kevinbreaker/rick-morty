import type { Response } from '@services/index'
import gql from 'graphql-tag'
import type { Character } from '@/@types/character'
export type GetAllCharacters = Response<Character[]>

export const getAllCharacters = gql`
  query getAllCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        status
        name
        image
        species
        gender
      }
    }
  }
`

export type GetCharacter = Character

export const getCharacterDetails = gql`
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      species
      type
      gender
      origin {
        name
        type
        dimension
      }
      location {
        name
        type
        dimension
      }
      episode {
        name
        episode
        air_date
      }
    }
  }
`
