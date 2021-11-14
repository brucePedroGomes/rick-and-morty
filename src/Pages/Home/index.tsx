import { Stack, Button, Text, Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container } from '../../Components/Container'

import { EmbedVideo } from './EmbedVideo'
import imgCharacters from '../../assets/characters.png'

import imgEpisodes from '../../assets/episodes.png'

export const Home = () => {
    return (
        <Container>
            <Stack>
                <EmbedVideo />
            </Stack>
            <Stack mt="200px" alignItems="center">
                <Text fontWeight="700" fontSize="35px" color="#FFF">
                    Where will you start?
                </Text>
            </Stack>
            <Flex justifyContent="space-around">
                <Stack>
                    <Image src={imgCharacters} padding="40px 0px" />
                    <Button
                        as={Link}
                        to="/characters"
                        fontWeight="700"
                        fontSize="28px"
                        borderRadius="20px"
                        _hover={{
                            backgroundColor: '#24FE00',
                        }}
                    >
                        Characters
                    </Button>
                </Stack>
                <Stack>
                    <Image src={imgEpisodes} padding="40px 0px" />
                    <Button
                        as={Link}
                        to="/episodes"
                        fontWeight="700"
                        fontSize="28px"
                        borderRadius="20px"
                        _hover={{
                            backgroundColor: '#24FE00',
                        }}
                    >
                        Episodes
                    </Button>
                </Stack>
            </Flex>
        </Container>
    )
}
