import { Box } from '@chakra-ui/react'

export const Container: React.FC = ({ children }) => (
    <Box w="100%" h="100vh" bgColor="#040829">
        {children}
    </Box>
)
