import { Box, Badge, Button, Heading, Stack, Text } from "@chakra-ui/react";
import ConteudoHome from "../../components/ConteudoHome/ConteudoHome";

function Home() {
    return (
        <section style={{ padding: "2rem 1rem" }}>
            <Box
                p={6}
                borderRadius="xl"
                bgGradient="linear(to-r, #6b46c1, #d946ef)"
                color="white"
                mb={6}
            >
                <Stack spacing={3}>
                    <Badge colorScheme="whiteAlpha" width="fit-content">Novidades</Badge>
                    <Heading as="h1" size="lg">Bem-vindo à Nossa Loja</Heading>
                    <Text>Produtos selecionados com uma apresentação mais refinada para sua visita.</Text>
                </Stack>
            </Box>

            <ConteudoHome />
        </section>
    )
}

export default Home;