import { ButtonProps } from '@chakra-ui/button'
import { Paginator as ChakraPaginator, Container, Previous, Next, PageGroup } from 'chakra-paginator'

const outerLimit = 2
const innerLimit = 2

const baseStyles: ButtonProps = {
    w: 10,
    fontSize: 'sm',
}

const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
        bg: 'green.300',
    },
}

const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
        bg: 'blue.300',
    },
    bg: 'green.300',
}

const separatorStyles: ButtonProps = {
    w: 10,
}

type Props = {
    page: number
    pagesQuantity: number
    setPage: (page: number) => void
}

export const Paginator: React.FC<Props> = ({ page, pagesQuantity, setPage }) => (
    <ChakraPaginator
        pagesQuantity={pagesQuantity}
        currentPage={page}
        onPageChange={setPage}
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
    >
        <Container align="center" justify="space-between" w="full" p={4}>
            <Previous
                _hover={{
                    bg: 'green.300',
                }}
            >
                Previous
            </Previous>
            <PageGroup isInline align="center" />
            <Next
                _hover={{
                    bg: 'green.300',
                }}
            >
                Next
            </Next>
        </Container>
    </ChakraPaginator>
)
