import { useQuery } from '@apollo/client'
import { Stack, Input, Flex, Text, Image, Box, Grid } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { GET_CHARACTERS } from './query'
import { GetCharacters, GetCharactersVariables } from './__generated__/GetCharacters'
import debounce from 'lodash.debounce'

import { SkeletonItem } from './Skeleton'
import { Paginator } from './Paginator'
import { EmptyState } from './EmptyState'

export const Characters = () => {
    const [page, setPage] = useState<number>(1)
    const [name, setName] = useState<string>('')
    const [totalPage, setTotalPage] = useState<number>(0)

    const { data, loading } = useQuery<GetCharacters, GetCharactersVariables>(GET_CHARACTERS, {
        variables: {
            page,
            name,
        },
    })

    useEffect(() => {
        if (data?.characters?.info?.pages) {
            setTotalPage(data.characters.info.pages)
        }
    }, [data?.characters?.info?.pages])

    const debouncedChangeHandler = useMemo(
        () =>
            debounce((event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
            }, 300),
        []
    )



    return (
        <Stack>
            <Flex marginTop="30px" justifyContent="space-between" padding="60px">
                <Input
                    w="703px"
                    placeholder="search..."
                    h="57px"
                    borderColor="green.300"
                    onChange={debouncedChangeHandler}
                    _placeholder={{ color: 'green.300' }}
                    type="search"
                />
                <Stack />
            </Flex>
            {!data?.characters?.results && !loading && <EmptyState />}
            <Grid templateColumns="repeat(5, 1fr)" gap={1} padding="20px 40px">
                {loading ? (
                    <>
                        {[...Array(20)].map((_, i) => (
                            <SkeletonItem key={i} />
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
            <Paginator page={page} setPage={setPage} pagesQuantity={totalPage} />
        </Stack>
    )
}
