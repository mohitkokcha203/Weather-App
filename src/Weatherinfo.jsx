import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Diamond from './assets/wether-image.avif';
import HotImages from './assets/hot-images.jpg';
import ColdImage from './assets/cold-image.jpg'
import RainyImages from './assets/rainy-images.jpg'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import './Weatherinfo.css';
function Weatherinfo({Information}){
    
    
    return(
        <div className='Weather-info-div'>
           
           <Card sx={{ maxWidth: 480 }} className='Weather-info-div-card'>
                <CardMedia 
                    sx={{ height: 200 }}
                    image={Information.humidity>80? RainyImages:(Information.temp>32)?HotImages:(Information.temp<15)?ColdImage:Diamond}
                    title={Information.weather_desc}
                />
                <CardContent className='Weather-info-div-cardcontent'>
                    <Typography gutterBottom variant="h5" component="div" >
                        <div className='info-cityname'>
                        {Information.cityName}
                        {Information.humidity>80? <ThunderstormIcon className='Weather-info-div-cardcontent-rainicon'/>:(Information.temp>32)?<WbSunnyIcon className='Weather-info-div-cardcontent-hoticon'/>:(Information.temp<15)?<AcUnitIcon className='Weather-info-div-cardcontent-coldicon'/>:<ThermostatAutoIcon className='Weather-info-div-cardcontent-roomicon'/>}

                        </div>
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        
                        <p className='card-info'><span>Temperature :</span> {Information.temp}&deg;C</p>
                        <p className='card-info'><span>Humidity : </span>{Information.humidity}</p>
                        <p className='card-info'><span>Feel-Likes :</span> {Information.feel_likes}</p>
                        <p className='card-info'><span>Min-Temp : </span>{Information.min_temp}&deg;C</p>
                        <p className='card-info'><span>Max-Temp : </span>{Information.max_temp}&deg;C</p>
                        <p className='card-info'><span>Descrption : </span>{Information.weather_desc}</p>
                        
                    </Typography>
                </CardContent>
                
            </Card>
  

        </div>
    )
}
export default Weatherinfo;