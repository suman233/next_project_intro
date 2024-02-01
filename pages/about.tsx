import assest from '@/json/assest'
import Wrapper from '@/layout/Wrapper/Wrapper'
import { Container, Grid, Typography, styled } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/about.module.css'

const about = () => {
    return (
        <div>
            <Wrapper>

                <Typography variant='h4' sx={{ textAlign: 'center', color:'black', fontSize:'30px', fontWeight: 'bold', mb: 3 }}>About</Typography>
                <Typography variant='h5' sx={{ textAlign: 'center',fontSize:'17px',color:'black', mb: 3 }}> We are a small passionate team.</Typography>

                <Container>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <div className={styles.abtimg}>
                                <img src={assest.about1} alt="" style={{ borderRadius: '10%', marginTop: 60 }} width={320} height={320} />
                            </div>
                            <Link href="" ><p style={{ color: 'blue' }}>INFO</p></Link>
                        </Grid>
                        <Grid item xs={4}>
                            <img className={styles.abtimg} src={assest.about2} alt="" style={{ borderRadius: '10%' }} width={320} height={320} />
                            <Link href="" ><p style={{ color: 'blue' }}>INFO</p></Link>

                        </Grid>
                        <Grid item xs={4}>
                            <img className={styles.abtimg} src={assest.about3} alt="" style={{ borderRadius: '10%', marginTop: 60 }} width={320} height={320} />
                            <Link href="" ><p style={{ color: 'blue' }}>INFO</p></Link>

                        </Grid>

                    </Grid>
                    <Container maxWidth="sm">
                        <Typography sx={{ textAlign: 'center', my: 5 }}>
                            We provide real-time connectivity to enable software providers and financial institutions to build integrated products for their small business customers.
                            Our API infrastructure is leveraged by clients ranging from lenders to corporate card providers and business forecasting tools, with use cases including automatic reconciliation, business dashboarding, and loan decisioning.
                        </Typography>
                    </Container>

                </Container>
            </Wrapper>

        </div>
    )
}

export default about