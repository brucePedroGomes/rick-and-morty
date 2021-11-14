import { useQuery } from '@apollo/client'
import { Stack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { GET_CHARACTES } from './query'
import { GetCharactes, GetCharactesVariables } from './__generated__/GetCharactes'

export const Characters = () => {
    const { data } = useQuery<GetCharactes, GetCharactesVariables>(GET_CHARACTES)

    const characters = useMemo(() => data?.characters?.results ?? [], [data])

    return (
        <Stack>
            {characters.map((c) => (
                <Stack key={c?.id}>
                    <Text>{c?.name}</Text>
                </Stack>
            ))}
        </Stack>
    )
}
