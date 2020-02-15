import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating'

let wrapper = null;

beforeEach(()=>{
     wrapper = shallowMount(Rating, {
        propsData: {
            maxStars: 6,
            grade: 4
        }
    });
});

afterEach(()=>{
    wrapper.destroy();
});

describe('Rating', ()=>{

    it('renders a list of stars with class `active` equal to prop.grade', () =>{
        expect(wrapper.findAll('.active').length).toEqual(4);
    });

    it('adds `active` class on an inactive class when the user clicks it', ()=>{
        wrapper.setMethods({ toggleVisibility:jest.fn() })

        let fourthStar = wrapper.findAll('[data-test-id="star"]').at(4);
        let sixthStar = wrapper.findAll('[data-test-id="star"]').at(5);
        sixthStar.trigger("click");
        expect(fourthStar.classes()).toContain("active")
    })
});

