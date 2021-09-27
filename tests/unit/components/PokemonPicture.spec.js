import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture', () => {
    
    test('should match with snapshot', () => {

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('should show hidden image and pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')
        
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)

        expect(img1.classes('hidden-pokemon')).toBe(true)

        //'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
        expect(img1.attributes('src')).toContain('100.svg')
        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

    test('should should pokemon if showPicture is true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.find('img')
        
        expect(img1.exists()).toBeTruthy()
        expect(img1.classes('hidden-pokemon')).toBe(false)
        expect(img1.classes('fade-in')).toBe(true)
    })
})