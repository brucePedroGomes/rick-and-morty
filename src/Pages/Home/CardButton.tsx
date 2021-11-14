import { Button } from '@chakra-ui/button'
import { Link } from '@chakra-ui/layout'

export const CardButton = () => {
    return (
        <Button as={Link} to="/characters">
            Characters
        </Button>
    )
}
