import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
export default class PokeCard extends Component {
  render() {
    const {pokemon} = this.props
    console.log(pokemon)
    return (
      // <div>
      //   {pokemon.name}
      // </div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
  }
}
