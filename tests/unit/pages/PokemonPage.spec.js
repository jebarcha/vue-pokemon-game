import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage', () => {
    
    let wrapper
    let mixPokemonArraySpy

    beforeEach(() => {
        mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')  
        
        wrapper = shallowMount(PokemonPage)
    })

    test('should match with snapshot', () => {

    })

    test('should call mixPokemonArray when mount', () => {
      
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')  
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()

    })

    test('should match with snapshot when load pokemons', () => {
        
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                  }
            }
        })

        //expect(wrapper.html()).toMatchSnapshot()
    })

    test('should show PokemonPicture and PokemonOption', () => {
      
        // PokemonPicture should exists
        // PokemonOptions should exists

        // PokemonPicture attribute pokemonId === 5

        // PokemonOptions attribute pokemons toBe true
        
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                  }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()

        expect(picture.attributes('pokemonid')).toBe('5')
        expect(options.attributes('pokemons')).toBeTruthy()
    })

    test('checkAnswer test', async() => {
      
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                  }
            }
        })

        await wrapper.vm.checkAnswer(5)
        
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correct, ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(10)
        expect(wrapper.find('h2').text()).toBe(`Ops, It was ${pokemons[0].name}`)
        expect(wrapper.vm.message).toBe(`Ops, It was ${pokemons[0].name}`)
    })

})