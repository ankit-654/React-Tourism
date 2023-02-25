import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ExploreComponent.css'
export default function Explore() {
  return (
      <>
      <div className='card-box'>
       <div className='card-resp-center'>
       <div className='card-item'>
        <Card className='shadow'>
      <CardMedia
        sx={{ height: 140 }}
        image='/assets/hill.jpg'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Hill Areas
        <hr/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your bags are packed. Your out-of-office email reply is all set.
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button>Explore</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    <div className='card-resp-center'>
       <div className='card-item'>
        <Card className='shadow'>
      <CardMedia
        sx={{ height: 140 }}
        image='/assets/sea-and-beach.jpg'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Sea and Beach
        <hr/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your bags are packed. Your out-of-office email reply is all set.
          
        </Typography>
      </CardContent>
      <CardActions>
       <Button>Explore</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    <div className='card-resp-center'>
       <div className='card-item'>
        <Card className='shadow'>
      <CardMedia
        sx={{ height: 140 }}
        image='/assets/forest.jpg'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Forest and Island
        <hr/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your bags are packed. Your out-of-office email reply is all set.
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button>Explore</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    <div className='card-resp-center'>
       <div className='card-item'>
        <Card className='shadow'>
      <CardMedia
        sx={{ height: 140 }}
        image='/assets/forts.jpg'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Forts and Palace
        <hr/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your bags are packed. Your out-of-office email reply is all set.
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button>Explore</Button>
      </CardActions>
    </Card>
    </div>
    </div>
            </div>
    </>
  );
}