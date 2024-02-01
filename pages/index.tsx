import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { Container, Grid, Typography } from "@mui/material";
import assest from "@/json/assest";
import Link from "next/link";
import styles from '@/styles/about.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <Wrapper>
        {/* <Typography sx={{ mx: 5, textAlign: 'center' }}>Home Page</Typography> */}
        <Container>

          <Grid container>
            <Grid item xs={6}>
              <img className={styles.abtimg} src={assest.home2_img} alt="" width={520} height={300} style={{ borderRadius: '2%' }} />
              <Link href="" style={{ textDecoration: 'none' }}><Typography color={'blue'}>Technology</Typography></Link>
              <p style={{color:'black', fontSize:'24px', fontWeight:'bold', marginRight:'50px'}}>Architectural Engineering Wonders of the modern era for your Inspiration</p>
              <div style={{display:'flex'}}>
                <div>
                  <img src={assest.avatar1} alt="" style={{ borderRadius: '50%' }} width={40}/>
                </div>
                <p style={{ marginLeft:'10px' }}>Mario Sanchez &nbsp; • &nbsp; October 21, 2022</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <img src={assest.home1_img} className={styles.abtimg} alt="" width={520} height={300} style={{ borderRadius: '2%' }} />
              <Link href="" style={{ textDecoration: 'none' }}><Typography color={'violet'}>LifeStyle</Typography></Link>
              <p style={{color:'black', fontSize:'24px', fontWeight:'bold', marginRight:'50px'}}>5 Effective Brain Recharging Activities No One is Talking About</p>
              <div style={{display:'flex'}}>
                <div>
                  <img src={assest.avatar2} alt="" style={{ borderRadius: '50%' }} width={40}/>
                </div>
                <p style={{marginLeft:'10px'}}>Joshua Wood &nbsp; • &nbsp; October 21, 2022</p>
              </div>
            </Grid>

          </Grid>
          <Grid container spacing={2} my={4}>
            <Grid item xs={4}>
              <img src={assest.gallery1} className={styles.abtimg} alt="" style={{ borderRadius: '10%' }} width={300} height={360} />
              <div>
                <div style={{display:'flex'}}>
                  <Link href="" style={{ textDecoration: 'none' }}><p style={{ color: 'blue' }}>DESIGN</p></Link>
                  <Link href="" style={{ textDecoration: 'none' }}><p style={{ marginLeft:'10px', color: 'violet' }}>LIFESTYLE</p></Link>
                </div>
                <Typography>14 Architectural Design Ideas for a Spacious Interior</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={assest.gallery2} className={styles.abtimg} alt="" style={{ borderRadius: '10%' }} width={300} height={360} />
              <div>
              <div style={{display:'flex'}}>
                  <Link href="" style={{ textDecoration: 'none' }}><p style={{ color: 'blue' }}>LIFESTYLE</p></Link>
                  <Link href="" style={{ textDecoration: 'none' }}><p style={{ marginLeft:'10px', color: 'green' }}>PERSONAL GROWTH</p></Link>
                </div>
                <Typography>Every Next Level of Your Life Will Demand a Different You</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={assest.gallery3} className={styles.abtimg} alt="" style={{ borderRadius: '10%' }} width={300} height={360} />
              <div>
              <Link href="" style={{ textDecoration: 'none' }}><p style={{ color: 'brown' }}>TRAVEL</p></Link>
                <p>This Bread Pudding Will Give You All the Fall Feels</p>
              </div>
            </Grid>

          </Grid>


        </Container>

      </Wrapper>



    </>
  );
}
