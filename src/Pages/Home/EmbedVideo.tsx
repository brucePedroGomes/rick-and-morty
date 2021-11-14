import { AspectRatio, Stack, Text, Box, Flex } from '@chakra-ui/react'

export const EmbedVideo = () => {
    return (
        <Stack marginTop="200px" minWidth="1280px">
            <Flex height="132px" bgColor="#FFF" justifyContent="space-around" alignItems="center">
                <Box w="640px" h="380px" border="4px solid #24FE00" padding="20px">
                    <AspectRatio ratio={16 / 9}>
                        <iframe
                            width="1280"
                            height="720"
                            src="https://www.youtube.com/embed/hl1U0bxTHbY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </AspectRatio>
                </Box>
                <Text fontWeight="700" fontSize="30px" width="732px">
                    Wubba lubba dub dub! Have fun with the episodes of this animation that is the height of madness.
                </Text>
            </Flex>
        </Stack>
    )
}
