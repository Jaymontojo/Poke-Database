import React, { Component } from 'react';
import {
  Container,
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
      <Card sx={{ maxWidth: '100%', height: '100%'}}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {pokemon.name_en}
        </Typography>
      </CardContent>
      <Container sx={{ display: 'block', maxWidth: '100%' , height: 250}}>
        <CardMedia
          component="img"
          sx={{ display: 'block', maxWidth: '100%' , maxHeight: '100%'}}
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name_en.toLowerCase()}.gif`} //`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name_en.toLowerCase()}.gif`
          alt={pokemon.name_en}
        />
      </Container>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The {pokemon.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
    )
  }
}
