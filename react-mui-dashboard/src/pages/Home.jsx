import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import AccordionDash from '../components/AccordionDash';
import Sidenav from '../components/Sidenav'
import BarChart from '../charts/BarChart';
import Navbar from '../components/Navbar'
import "../Dash.css";

export default function Home() {
    return (
        <>
            <div className='bgColor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />

                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconStyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientLight'>
                                        <CardContent>
                                            <div className='iconStyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $900.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 345 }} className='gradientLight'>
                                        <Stack spacing={2} direction="row">
                                            <div className='iconStyle'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingAll'>
                                                <span className='priceTitle'>$203K</span>
                                                <br />
                                                <span className='priceSubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction="row">
                                            <div className='iconStyleBlack'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingAll'>
                                                <span className='priceTitle'>$203K</span>
                                                <br />
                                                <span className='priceSubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <BarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingAll'>
                                            <span className='priceTitle'>Popular Products</span>
                                        </div>
                                        <Box height={10} />
                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </div>
        </>
    )
}