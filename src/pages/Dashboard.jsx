import { Grid } from '@mui/material'
import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json';
import { StatusCard } from '../components/index';
const Dashboard = () => {
    return (
        <div>
            <h2 className="page__header">Dashboard</h2>
            <div className="row">
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Grid xs container spacing={2}>
                            {statusCards.map((item,index) => (
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                                    {item.title}
                                    <StatusCard icon={item.icon} count={item.count} title={item.title} />
                                </Grid>
                            ))}
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard
