import { Stack, Heading, CircularProgress } from '@chakra-ui/react'

export const Episodes = () => {
    return (
        <Stack align="center" justifyContent="center" w="100%" h="100vh">
            <Heading marginBottom="20px">in development</Heading>
            <CircularProgress isIndeterminate color="green.300" />
        </Stack>
    )
}
