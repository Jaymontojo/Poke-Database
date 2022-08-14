import React, { Component } from 'react'
import PokeCard from '../pokecard/PokeCard';
import { 
  Grid,
  Container,
} from '@mui/material';
import axios from 'axios'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    }
  }
  componentDidMount() {
    axios.get('/api/pokemon')
      .then(response => {
        //console.log(response.data);
        this.setState({
          pokemons: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { pokemons } = this.state
    console.log(pokemons)
    return (
      <Container>
        <Grid>
          {pokemons.map(pokemon => {
            return (
              <Grid item key={pokemon.id} xs={12} md={6} lg={4}>
                <PokeCard pokemon={pokemon}/>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    )
  }
}

