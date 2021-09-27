import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';
import pokemonApi from '../../../src/api/pokemonApi';

describe('getPokemonOptions helpers', () => {
    test('should return an array of numbers', () => {
        const pokemons = getPokemons()
        
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[649]).toBe(650)
    })

    test('getPokemonNames: should return an array of 4 elements with their names of pokemons', async() => {
        
        const pokemonNames = await getPokemonNames([1,2,3,4])
        //console.log(pokemonNames)

        const expectedArray =  [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ]

        expect(pokemonNames).toStrictEqual(expectedArray)
    })

    test('getPokemonOptions must return a mixed array', async() => {
        const pokemons = await getPokemonOptions()
        //console.log(pokemons)

        expect(pokemons.length).toBe(4)

        const expectedArray =  [
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)
            }
          ]

    })
})
