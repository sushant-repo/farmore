import React from 'react';
import Banner from '../Banner';
import bannerImage from '../assets/images/vector-coffee-leaves.png';
import styled,{css} from 'styled-components';
import * as global from '../GlobalStyles';
import { device } from '../Device';
import FeaturedCoffee from '../components/FeaturedCoffee';
import Coffee from '../components/Coffee';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars,faShoppingCart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fab, faBars, faShoppingCart, faPlus);
dom.watch();


const centerFlex = css`
    display: flex; 
    align-items:center;
    justify-content: center;
`;
const Container = styled.div`
    margin: 0 10rem;
    height: auto;
`;

const Row = styled.div`
    ${centerFlex}   
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0;
`;

const FilterIconWrapper = styled.div`
    ${centerFlex}   
    font-size: 2.5rem;
`;

const SearchFieldWrapper = styled.div``;

const Featured = styled.div``;

const AllItems = styled.div``;



const Products = () => {
    return (
        <>
          <Banner image={bannerImage}
          backgroundColor = "#F53396"
            title1="Browse the range of ethically sourced Colombian coffee below."
            />  
            <Container>
                <Row>
                    <FilterIconWrapper>
                    <FontAwesomeIcon icon={faBars}/>
                    </FilterIconWrapper>
                    <SearchFieldWrapper>
                        <input type="text" placeholder="search field with magnifier icon"/>
                    </SearchFieldWrapper>
                </Row>
                    <Row>
                        <FeaturedCoffee 
                            more={faPlus} 
                            addToCart ={faShoppingCart} 
                            id="f1"
                            name="Top Coffee"
                            coffeeImage = "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
                            ownerImage = "https://eco-business.imgix.net/ebmedia/fileuploads/4932164676_69d92d2ed5_k.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440"
                            owner="Sushant Thapa"
                            rating = {3}
                            price={500.00}
                            unit="bag"
                             />
                        <FeaturedCoffee 
                        more={faPlus} 
                        addToCart ={faShoppingCart}
                        id="f2" 
                        name="Top Coffee"
                        coffeeImage = "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
                        ownerImage = "https://eco-business.imgix.net/ebmedia/fileuploads/4932164676_69d92d2ed5_k.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440"
                        owner="Sushant Thapa"
                        rating = {3}
                        price={130.33}
                        unit="kg"/>
                    </Row>
                    <Row>

                        <Coffee 
                        more={faPlus} 
                        addToCart ={faShoppingCart}
                        id="c1" 
                        name="Random Coffee 1"
                        coffeeImage = "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
                        ownerImage = "https://eco-business.imgix.net/ebmedia/fileuploads/4932164676_69d92d2ed5_k.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440"
                        owner="Sushant Thapa"
                        rating = {2}
                        price={80.33}
                        unit="kg"/>
                       
                       
                        <Coffee 
                        more={faPlus} 
                        addToCart ={faShoppingCart}
                        id="c2" 
                        name="Random Coffee 2"
                        coffeeImage = "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
                        ownerImage = "https://eco-business.imgix.net/ebmedia/fileuploads/4932164676_69d92d2ed5_k.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440"
                        owner="Sushant Thapa"
                        rating = {3}
                        price={13.33}
                        unit="kg"/>
                        <Coffee 
                        more={faPlus} 
                        addToCart ={faShoppingCart} 
                        name="Random Coffee 2"
                        coffeeImage = "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
                        ownerImage = "https://eco-business.imgix.net/ebmedia/fileuploads/4932164676_69d92d2ed5_k.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440"
                        id="c3"
                        owner="Sushant Thapa"
                        rating = {5}
                        price={130.13}
                        unit="kg"/>
                        </Row>
                {/* <AllItems>
                    <Row3c>
                        <Coffee/>
                        <Coffee/>
                        <Coffee/>
                    </Row3c>
                    <Row3c>
                        <Coffee/>
                        <Coffee/>
                        <Coffee/>
                    </Row3c>
                </AllItems> */}
            </Container>
        </>
    )
}

export default Products
