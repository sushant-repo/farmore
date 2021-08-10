import React, { useState } from 'react';
import styled from 'styled-components';
import FileUpload from './utils/FileUpload';

const Wrapper = styled.div``;
const TitleWrapper = styled.div``;
const Title = styled.h2``;
const Form = styled.form``;
const Section= styled.div`
    padding: 1rem;
    margin: 3rem auto;
    border: 1px solid grey;
    position: relative;
    border-radius: 1.5rem;
    max-width: 700px;
`;
const Details= styled.div`
    padding: 1rem;
    margin: 3rem auto;
    border: 1px solid grey;
    position: relative;
    border-radius: 1.5rem;
    max-width: 1000px;
`;
const Heading = styled.p`
    display: block;
    position: absolute;
    top: -46px;
    left: 11px;
    background: white;
    padding: 0 1rem;
    font-weight: 800;
    font-size: 1.5rem;
`;
const Label = styled.label`
margin: .5rem 1.3rem;
display: block;
font-size: 1.3rem;
`;
const TextArea = styled.textarea`
margin: .5rem 1.3rem;
width: 97%;
display: block;
height: 9rem;
`;
const Input = styled.input`
height: 4rem;
width: 97%;
margin: .5rem 1.3rem;
`;
const Button = styled.button``;

const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 2rem 0;
`;



function UploadProduct() {

    const [CoffeeName, setCoffeeName] = useState('');
    const [CoffeeDescription, setCoffeeDescription] = useState('');
    const [CoffeeGrade, setCoffeeGrade] = useState('');
    const [FarmName, setFarmName] = useState('');
    const [Varietal, setVarietal] = useState('');
    const [Process, setProcess] = useState('');
    const [Altitude, setAltitude] = useState('');
    const [Owner, setOwner] = useState('');
    const [Country, setCountry] = useState('');
    const [Region, setRegion] = useState('');
    const [SubRegion, setSubRegion] = useState('');
    const [FarmSize, setFarmSize] = useState('');
    const [BagSize, setBagSize] = useState('');
    const [HarvestMonth, setHarvestMonth] = useState('');
    const [Price, setPrice] = useState(0);
    
    
    const onNameChange = event =>{
        setCoffeeName(event.currentTarget.value); 
    }

    const onDescriptionChange = event =>{
        setCoffeeDescription(event.currentTarget.value); 
    }
    const onGradeChange = event =>{
        setCoffeeGrade(event.currentTarget.value); 
    }
    const onFarmChange = event =>{
        setFarmName(event.currentTarget.value); 
    }
    const onVarietalChange = event =>{
        setVarietal(event.currentTarget.value); 
    }
    const onProcessChange = event =>{
        setProcess(event.currentTarget.value); 
    }
    const onAltitudeChange = event =>{
        setAltitude(event.currentTarget.value); 
    }
    const onOwnerChange = event =>{
        setOwner(event.currentTarget.value); 
    }
    
    const onCountryChange = event =>{
        setCountry(event.currentTarget.value); 
    }
    const onRegionChange = event =>{
        setRegion(event.currentTarget.value); 
    }
    const onSubRegionChange = event =>{
        setSubRegion(event.currentTarget.value); 
    }
    const onFarmSizeChange = event =>{
        setFarmSize(event.currentTarget.value); 
    }
    const onBagSizeChange = event =>{
        setBagSize(event.currentTarget.value); 
    }
    const onHarvestMonthChange = event =>{
        setHarvestMonth(event.currentTarget.value); 
    }
    const onPriceChange = event =>{
        setPrice(event.currentTarget.value); 
    }

    

    return (
        <Wrapper style={{margin:'2rem auto'}}>
           
            <TitleWrapper style={{textAlign: 'center', marginBottom: '2rem'}}>
                <Title level={2}>Upload New Product</Title>
            </TitleWrapper>

            <Form onSubmit>
            <Section>
            <FileUpload/>

                <Heading>Introduction</Heading>
                <Label>Coffee Name</Label>
                <Input 
                    onChange={onNameChange}
                    value={CoffeeName}
                />

                <Label>Short Description</Label>
                <TextArea 
                    onChange={onDescriptionChange}
                    value={CoffeeDescription}
                />
            </Section>
            
            <Details>
                <Heading>Details</Heading>
                <Row>

                <Label>
                    Coffee Grade
                </Label>
                <Input 
                    onChange={onGradeChange}
                    value={CoffeeGrade}
                />
                <Label>
                    Farm/coop/station
                </Label>
                <Input 
                    onChange = {onFarmChange}
                    value = {FarmName}
                />
                </Row>
                <Row>
                 <Label>
                   Varietal
                </Label>
                <Input 
                    onChange = {onVarietalChange}
                    value={Varietal}
                />
                 <Label>
                    Processing
                </Label>
                <Input 
                    onChange={onProcessChange}
                    value = {Process}
                />
                 <Label>
                    Altitude
                </Label>
                <Input 
                    onChange={onAltitudeChange}
                    value={Altitude}
                />
                </Row>

                 <Label>
                    Owner
                </Label>
                <Input 
                    onChange={onOwnerChange}
                    value={Owner}
                />
                <Row>
                 <Label>
                    Country
                </Label>
                <Input 
                    onChange={onCountryChange}
                    value ={Country}
                />
                 <Label>
                   Region
                </Label>
                <Input 
                    onChange={onRegionChange}
                    value={Region}
                />
                 <Label>
                    SubRegion/Town
                </Label>
                <Input 
                    onChange={onSubRegionChange}
                    value={SubRegion}
                />
                </Row>
                 <Label>
                    Farm Size
                </Label>
                <Input 
                    onChange={onFarmSizeChange}
                    value={FarmSize}
                />
                 <Label>
                    Bag Size
                </Label>
                <Input 
                    onChange={onBagSizeChange}
                    value={BagSize}
                />
                 <Label>
                    Harvest Months
                </Label>
                <TextArea 
                    onChange={onHarvestMonthChange}
                    value={HarvestMonth}
                />
                 <Label>
                    Price
                </Label>
                <Input 
                    onChange={onPriceChange}
                    value={Price}
                    type="number"
                />
               
            </Details>
            <Button
                onClick
            >
                Submit
            </Button>
            </Form>
        </Wrapper>
    )
}

export default UploadProduct
