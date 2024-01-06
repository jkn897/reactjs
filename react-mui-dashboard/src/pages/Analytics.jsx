import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import "../Dash.css";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import GeoChart from '../charts/GeoChart'
import PieChart from '../charts/PieChart'
import HBarChart from '../charts/HBarChart'
import CountUp from 'react-countup'

export default function Analytics() {
    return (
        <>
            <div className='bgColor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack spacing={2} direction="row">
                                    <Box sx={{ width: "50%" }}>
                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} className='gradient'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.4} end={12000} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} className='gradient'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.4} end={24630} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ width: "50%", height: "50%" }}>
                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} className='gradientLight'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.4} end={37050} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} className='gradientLight'>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.4} end={45500} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={7}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <HBarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div >
        </>
    )
}
