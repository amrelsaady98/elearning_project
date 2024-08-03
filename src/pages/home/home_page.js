
import {Container, Paper, Slider} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Image} from "@mui/icons-material";
import {blue} from "@mui/material/colors";
import pxToRem from "../../assets/theme/functions/pxToRem";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function HomePage(){

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:'alx-slide-10.png'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:'alx-slide-9.png'

        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:'alx-slide2-min.png'
        }
    ]

    return (
        <>
            <Carousel
                indicators={true}
                indicatorContainerProps={{
                   style:{
                       zIndex: 3,
                       top: "-10rem",
                       marginBottom:'-4rem',
                       position: "relative",
                   }
                }}
                indicatorIconButtonProps={{
                    style:{
                        scale:'0.7'
                    }
                }}
            >
               {
                   items.map( (item, i) => (<Item item={item} key={i} />))
               }
            </Carousel>
            <Container
                sx={{
                    display:{xs:'none', lg:'block'},
                    width: "100%",
                    height:'7rem',
                    backgroundColor:blue[200],
                    position:'relative',
                    top:'-3.5rem',
                    zIndex:'5',
                    borderRadius:pxToRem(4),
                }}
            >

            </Container>

            <Box
                sx={{
                    px:'0',
                    py:'12px',
                    borderBottom:'0.2rem solid blue',
                    display:'inline'
                }}
            >
                All
            </Box>
        </>
    );
}
function Item(props)
{
    return (
        <Box
            sx={{
                width:'100vw',
                height:{xs: '330px', lg: '40vw'},
            }}
        >
        <img
            ci
            src={require(`assets/images/carousel/${props.item.image}`)}

            style={{
                objectFit: 'cover',
                width:'100%'
            }}
        />

        </Box>
    )
}