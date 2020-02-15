import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating'

describe('Rating', ()=>{
    const wrapper = shallowMount(Rating, {
        propsData: {
            maxStars: 6,
            grade: 3
        }
    });
    it('renders a list of stars with class `active` equal to prop.grade', () =>{
        expect(wrapper.findAll('.active').length).toEqual(3);
    })
});