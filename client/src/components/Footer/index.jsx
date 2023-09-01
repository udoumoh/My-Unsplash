import React from 'react'
import {
    Text,
    Box,
    Center,
    Flex,
} from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex align="flex-end" justify="flex-end" w="100%">
            <Box
            width={"100%"}
            alignItems={'center'}
            mb={4}
            >
            <Center>
            <Text
            color={'gray.400'}
            fontSize={20}
            fontWeight={'400'}
            >
                Created by <Text display={'inline'} color={'gray.500'} fontWeight={'400'}> Udoumoh </Text> - <Text color={'blue.500'} as={'a'} fontWeight={'400'} href='https://devchallenges.io/'>devChallenges.io</Text>
            </Text>
            </Center>
            </Box>
        </Flex>
    )
}

export default Footer