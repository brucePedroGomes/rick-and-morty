import { ChakraProvider } from '@chakra-ui/react'

import { ApolloProvider } from '@apollo/client'
import { client } from './Services/client'
import { Routes } from './Routes'

import { theme } from './theme/index'
import { Header } from './Components/Header'

export const App = () => (
    <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
            <Routes>
                <Header /> 
            </Routes>
        </ApolloProvider>
    </ChakraProvider>
)
