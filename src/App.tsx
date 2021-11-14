import { ChakraProvider, theme } from '@chakra-ui/react'

import { Characters } from './Pages/Characters'

import { ApolloProvider } from '@apollo/client'
import { client } from './Services/client'

export const App = () => (
    <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
            <Characters />
        </ApolloProvider>
    </ChakraProvider>
)
