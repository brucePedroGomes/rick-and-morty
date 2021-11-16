import { Heading, Stack } from '@chakra-ui/react'
import { RiFileSearchLine } from 'react-icons/ri'

export const EmptyState = () => {
    return (
        <Stack align="center" justifyContent="center" w="100%" h="100vh">
            <Heading>Nothing here matches your search</Heading>
            <RiFileSearchLine size={200} />
        </Stack>
    )
}
