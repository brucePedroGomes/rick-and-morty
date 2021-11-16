import { gql } from '@apollo/client'

export const GET_CHARACTES = gql`
    query GetCharactes($page: Int, $name: String) {
        characters(page: $page, filter: { name: $name }) {
            results {
                id
                name
                status
                species
                type
                gender
                image
                created
                location {
                    id
                    name
                }
                origin {
                    id
                    name
                }
                episode {
                    id
                    name
                }
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
