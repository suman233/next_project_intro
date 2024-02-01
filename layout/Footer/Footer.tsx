import { Box, Container, Divider, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const navItems = ['Home', 'About', 'Contact'];

    return (
        <div>
            <Container sx={{ mt: 4 }}>
                <Divider />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            navItems.map((item) => {
                                return (
                                    <>
                                        <Grid item xs={4}>
                                            <Link
                                                href={`${item}` === 'Home' ? `/` : `/${item.toLowerCase()}`}
                                            >{item}</Link>
                                        </Grid>
                                    </>
                                )
                            })
                        }

                        {/* <Grid item xs={4}>
                            <Link href={'/about'}>About</Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link href={'/'}>Company</Link>
                        </Grid> */}

                    </Grid>
                </Box>
            </Container>

        </div>
    )
}

export default Footer