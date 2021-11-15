import { useQuery } from '@apollo/client'
import { Stack, Input, Flex, Text, Image, Box, Grid, Skeleton } from '@chakra-ui/react'
import { useState } from 'react'
import { GET_CHARACTES } from './query'
import { GetCharactes, GetCharactesVariables } from './__generated__/GetCharactes'

import ReactPaginate from 'react-paginate'
import { SkeletonItem } from './Skeleton'

export const Characters = () => {
    const [page, setPage] = useState<number>(1)

    const { data, loading } = useQuery<GetCharactes, GetCharactesVariables>(GET_CHARACTES, {
        variables: {
            page,
        },
    })

    const handleClick = ({ selected }: { selected: number }) => {
        setPage(selected)
    }

    return (
        <Stack background="rickBlue">
            <Flex justifyContent="space-between" padding="60px">
                <Text fontSize="40px" fontWeight="700">
                    Characters
                </Text>
                <Input w="703px" placeholder="search..." h="57px" />
                <Stack />
            </Flex>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} padding="20px">
                {loading ? (
                    <>
                        {[...Array(20)].map((_) => (
                            <SkeletonItem />
                        ))}
                    </>
                ) : (
                    <>
                        {data &&
                            data?.characters?.results?.map((c) => (
                                <Box
                                    key={c?.id ?? ''}
                                    h="323px"
                                    w="233px"
                                    alignContent="center"
                                    alignItems="center"
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Image src={c?.image ?? ''} />
                                    <Text fontSize="20px" color="#FFF" fontWeight="700" mt="15px">
                                        {c?.name ?? ''}
                                    </Text>
                                </Box>
                            ))}
                    </>
                )}
            </Grid>
            <Box display="flex" alignItems="center" flexDirection="row">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handleClick}
                    pageRangeDisplayed={5}
                    pageCount={data?.characters?.info?.count ?? 0}
                    previousLabel="< previous"
                    marginPagesDisplayed={1}
                />
            </Box>
        </Stack>
    )
}
