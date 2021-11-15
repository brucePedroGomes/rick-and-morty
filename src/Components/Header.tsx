import { Button, Flex, Divider } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

type Props = {
    to: string
}

const ButtonLink = ({ to }: Props) => (
    <Button
        as={Link}
        padding="20px"
        border="3px solid"
        w="130px"
        borderColor="green.300"
        to={to}
        _hover={{
            backgroundColor: 'green.300',
        }}
    >
        {to}
    </Button>
)

export const Header = () => {
    return (
        <Flex w="100%" h="76px" backgroundColor="black" justifyContent="center" alignItems="center" position="fixed">
            <ButtonLink to="characters" />
            <Divider orientation="vertical" margin="20px" borderColor="green" />
            <ButtonLink to="episodes" />
        </Flex>
    )
}
