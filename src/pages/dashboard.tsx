import { Grid } from "@mui/material";
import { Dashboard, DashboardSide, DashboardBody } from "../components/layout";

export default function dashboard() {
    return (
    <>
        <Grid container justifyContent={'space-between'}>
            <Grid item xs={3}>
                <DashboardSide/>
            </Grid>
            <Grid item xs={7.8}>
                <Dashboard/>            
                <DashboardBody id={0}/>             
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    </>
    )
};
