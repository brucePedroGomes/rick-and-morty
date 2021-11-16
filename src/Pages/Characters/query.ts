import { gql } from '@apollo/client'

export const GET_CHARACTES = gql`
    query GetCharactes($page: Int, $name: String) {
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
