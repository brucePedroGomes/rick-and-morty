import { Stack, Image } from '@chakra-ui/react'

import Img from '../assets/logo.png'

export const Header = () => {
    return (
        <Stack w="100%" h="76px" backgroundColor="black" justifyContent="center" alignItems="center">
            <Image src={Img} w="180px" h="48px" />
        </Stack>
    )
}
