import {Card, CardContent, Grid, Typography} from "@mui/material";
import {Cpu} from "react-feather";


const MainPage = () => {

    return (
        <div className={"flex justify-center w-full"}>
            <Grid container
                  spacing={2}
                  padding={2}
                  className={"h-full max-w-[1690px]"}>
                <Grid item
                      xs={12}>
                    <Card>
                        <CardContent>
                            <Grid container
                                  spacing={2}>
                                <Grid item
                                      xs={12}>
                                    <Typography variant={"h1"}
                                                className={"flex items-center"}>
                                        <Cpu className={"mr-3"}
                                             size={40}/>Page principale</Typography>
                                </Grid>
                                <Grid item
                                      xs={12}>
                                    <Typography variant={"body2"}>Voici la page principale de l'application, commencez
                                        par créer une nouvelle page pour initialiser la navigation.</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item
                      xs={12}>
                    <Typography variant={"h2"}>Bienvenue sur l'application</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage;