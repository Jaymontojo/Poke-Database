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
    return (
      // <div>
      //   {pokemon.name}
      // </div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name_en.toLowerCase()}.gif`} //`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name_en.toLowerCase()}.gif`
        alt={pokemon.name_en}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name_en}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokemon.category}
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
