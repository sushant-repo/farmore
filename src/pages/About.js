import React from 'react'
import CardWithImage from '../CardWithImage'
import CoffeeHand from '../assets/images/vector-coffee-hand.png'
import Terrain from '../assets/images/vector-terrain.png'
import Building from '../assets/images/vector-building.png'
import styled from 'styled-components';
import * as global from '../GlobalStyles';
import {device} from '../Device';


const Wrapper = styled.div`
    padding: ${global.BodyPadding};
    @media ${device.mobile}{
        flex-direction: column;
        padding: ${global.BodyPaddingMobile}
        
    }
`;
const About = () => {
    return (
    <Wrapper>
        <CardWithImage 
        imageFirst
            image={CoffeeHand}
            title="What we do"
            description="Founded in 2019, we partner with a network of associates to offer production, export,
            education and product development services. We work primarily with wholesalers. We established a direct to consumer
            coffee brand during the pandemic to cater to cafe and coffee at home buyers."
            />

        <CardWithImage 
            image={Terrain}
            title="sustainability"
            description="Our selection of associetied producers in origin has to comint with sustainable practices as the shade grown.

            Shade grown coffee is possibly the most sustainable for of coffee cultivation.Not only does it influence coffee quality, 
            it requires little or no chemical fertilizers, pesticides or herbicides. The shade trees aid the ecological system whilst 
            reducing carbon dioxide; benefits include carbon retention, soil quality and minimizing erosion.
            "
            />

        <CardWithImage 
            imageFirst
            image={Building}
            title="Social Impact"
            description="Farmore has developed a meriticious and highly scalable model for working with independant producers. To us they are more than just suppliers, they are our “associates”.

            We aim to purchase 100% of associate crops, giving them a level of certainty from year to year. We are commited to our associates to improve their businesses and lives.
            "
            />
    </Wrapper>
    )
}

export default About
