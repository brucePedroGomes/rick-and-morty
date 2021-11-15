import { useQuery } from '@apollo/client'
import { Stack, Input, Flex, Text, Image, Box, Grid } from '@chakra-ui/react'
import { useState } from 'react'
import { GET_CHARACTES } from './query'
import { GetCharactes, GetCharactesVariables } from './__generated__/GetCharactes'

import { SkeletonItem } from './Skeleton'
import { Paginator } from './Paginator'

export const Characters = () => {
    const [page, setPage] = useState<number>(1)

    const { data, loading } = useQuery<GetCharactes, GetCharactesVariables>(GET_CHARACTES, {
        variables: {
            page,
        },
    })

    return (
        <Stack>
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
            <Paginator page={page} setPage={setPage} pagesQuantity={data?.characters?.info?.pages ?? 0} />
        </Stack>
    )
}
