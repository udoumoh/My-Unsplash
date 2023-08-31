import React from 'react'
import {
    Text,
    Box,
    Center,
} from "@chakra-ui/react"

const Footer = () => {
    return (
        <footer>
            <Box
            width={"100%"}
            alignItems={'center'}
            mb={4}
            >
            <Center>
            <Text
            color={'gray.400'}
            fontSize={20}
            fontWeight={'bold'}
            >
                Created by <Text display={'inline'} color={'gray.500'} fontWeight={'bold'}> Udoumoh </Text> - <Text color={'blue.500'} as={'a'} fontWeight={'bold'} href='https://devchallenges.io/'>devChallenges.io</Text>
            </Text>
            </Center>
            </Box>
        </footer>
    )
}

export default Footer