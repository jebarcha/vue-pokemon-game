import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions';

import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions', () => {
  
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('should match with snapShot', () => {
        
        //expect(wrapper.html()).toMatchInlineSnapshot()
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('should show the 4 options correctly', () => {
        // 4 <li></li> with pokemon name
        const liTags = wrapper.findAll('li')
        
        expect(liTags.length).toBe(4)
        
        expect( liTags[0].text() ).toBe('pikachu')
        expect( liTags[1].text() ).toBe('charmander')
        expect( liTags[2].text() ).toBe('venusaur')
        expect( liTags[3].text() ).toBe('mew')
    })

    test('should emit selectionPokemon with its respective params when click', () => {
        
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selectionPokemon').length).toBe(4)
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5])
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10])
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([15])
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([20])

    })
    
})