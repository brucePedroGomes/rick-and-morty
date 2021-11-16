import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int, $name: String) {
        characters(page: $page, filter: { name: $name }) {
            results {
                id
                name
                image
                created
            }
            info {
                count
                pages
                next
                prev
            }
        }
    }
`
