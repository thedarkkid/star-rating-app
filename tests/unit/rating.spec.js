import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating'

let wrapper = null;

beforeEach(()=>{
     wrapper = shallowMount(Rating, {
        propsData: {
            maxStars: 6,
            grade: 3
        }
    });
});

afterEach(()=>{
    wrapper.destroy();
});

describe('Rating', ()=>{

    it('renders a list of stars with class `active` equal to prop.grade', () =>{
        expect(wrapper.findAll('.active').length).toEqual(3);
    });

    it('adds `active` class on an inactive class when the user clicks it', ()=>{
        const thirdStar = wrapper.findAll('.star').at(2)
        thirdStar.trigger('click')
        expect(thirdStar.classes()).toContain('active')
    })
});

