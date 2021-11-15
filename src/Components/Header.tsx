import { Box, Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <Flex w="100%" h="76px" backgroundColor="black" justifyContent="center" alignItems="center">
            <Box as={Link} to="/characters">
                <Button>characters</Button>
            </Box>
            <Box as={Link} to="/episodes">
                <Button>Episodes</Button>
            </Box>
        </Flex>
    )
}
