import { Stack, Button, Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container } from '../../Components/Container'
import { CardButton } from './CardButton'
import { EmbedVideo } from './EmbedVideo'

export const Home = () => {
    return (
        <Container>
            <Stack>
                <EmbedVideo />
            </Stack>
            <Stack mt="200px" alignItems="center">
                <Text fontWeight="700" fontSize="35px" color="#FFF">
                    Por onde você vai começar
                </Text>
            </Stack>
            <Flex justifyContent="space-around">
                <CardButton />
                <CardButton />
            </Flex>
        </Container>
    )
}
