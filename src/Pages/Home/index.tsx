import { Stack, Text, Image, Flex } from '@chakra-ui/react'
import { Container } from '../../Components/Container'

export const Home = () => {
    return (
        <Container>
            <Stack w="100wv" h="324px" bgColor="#9ED5F1">
                <Flex justifyContent="space-between">
                    <Stack padding="30px 10px 10px 60px">
                        <Text fontWeight="700" fontSize="25px">
                            Rick And Morty (2013)
                        </Text>
                        <Text fontWeight="600" fontSize="20px">
                            Sinopse
                        </Text>
                        <Text width="600px" height="163px">
                            Rick Sanchez é um cientista genial e alcoólatra que foi morar com a família de sua filha
                            Beth, uma cirurgiã cardíaca de equinos. Ele divide seu tempo entre desenvolver projetos
                            altamente tecnológicos em seu laboratório (garagem da casa de Beth) e levar seu neto de 14
                            anos Morty em aventuras perigosas e surreais pelo Multiverso. Combinados com tensões
                            preexistentes dentro da família, esses eventos causam ao sensível Morty muito angústia em
                            casa e na escola.
                        </Text>
                    </Stack>
                    <Image
                        src="https://c.tenor.com/uo3d6Q2cniMAAAAC/rick-and-morty-trippy.gif"
                        width="1080px"
                        height="324px"
                        clipPath="polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 20% 100%, 0% 0%)"
                    />
                </Flex>
            </Stack>
        </Container>
    )
}
