import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15, textAlign: 'center', "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
                "& p": { textAlign: "justify" }, "@media (max-width:600px)": { mt: 0, "& h4": { fontSize: "1.5rem" } }
            }}>
                <Typography variant='h4'>
                    Welcome To My Restaurant
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
                    beatae ducimus magni nobis culpa praesentium velit expedita quae,
                    corrupti, pariatur inventore laboriosam consectetur modi impedit
                    error, repudiandae obcaecati doloribus.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
                    beatae ducimus magni nobis culpa praesentium velit expedita quae,
                    corrupti, pariatur inventore laboriosam consectetur modi impedit
                    error, repudiandae obcaecati doloribus.
                </p>
            </Box>

        </Layout >
    )
}

export default About