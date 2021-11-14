import { Stack, Image, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Img from '../assets/logo.png'

export const Header = () => {
    return (
        <Stack w="100%" h="76px" backgroundColor="black" justifyContent="center" alignItems="center">
            <Box as={Link} to="/">
                <Image src={Img} w="180px" h="48px" />
            </Box>
        </Stack>
    )
}
