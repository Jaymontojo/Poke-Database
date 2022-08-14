import React, { Component } from 'react'
import PokeCard from '../../components/pokecard/PokeCard';
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
      
        <Grid container spacing={3}>
          {pokemons.map(pokemon => {
            return (
              <Grid item key={pokemon.id} xs={12} md={4} lg={3}>
                <PokeCard pokemon={pokemon}/>
              </Grid>
            )
          })}
        </Grid>
    )
  }
}

