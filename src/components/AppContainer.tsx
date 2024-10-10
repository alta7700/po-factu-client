import React from "react";
import {Box, Center} from "@mantine/core";

export default function AppContainer({children}: {children: React.ReactNode}) {
    return (
        <Center>
            <Box
                component="main"
                w="100vw"
                h="100vh"
                // maw={600}
            >
                {children}
            </Box>
        </Center>
    );
};
