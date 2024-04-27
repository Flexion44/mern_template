import {Card, CardContent, Grid, Typography} from "@mui/material";
import {RefreshCw} from "react-feather";
import {useNavigate} from "react-router-dom";


const TopBar = ({children}) => {
    const navigation = useNavigate();

    return <Grid container
                 spacing={2}
                 padding={2}>
        <Grid item
              className={"relative h-16"}
              xs={12}>
            <Card
                onClick={() => {
                    navigation("/")
                }}
                className={"absolute top-5 left-5 group hover:bg-primary hover:bg-opacity-60 hover:shadow hover:text-white  cursor-pointer transition-all duration-300 ease-in-out"}
            >
                <CardContent className={"p-2 flex  items-center space-x-2"}>
                    <Typography variant={"body1"}
                                className={"flex space-x-2 items-center"}>
                        <b>Clé API
                            :</b>
                    </Typography>
                    <RefreshCw size={15}
                               className={"mr-2"}/>
                </CardContent>
            </Card>
        </Grid>
        {children}
    </Grid>
}

export default TopBar;