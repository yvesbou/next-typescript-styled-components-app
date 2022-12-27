import * as React from 'react';
import { CardContainer, CardStats, CardText, CardTextContainer, CardTitle, ImageContainer, Stat, StatDescription, StatNumber, StyledImage, WordHighlight } from '../components/styledComponents/Card'
import profile from '/public/images/image-header-desktop.jpg'
import { data } from '../content/cardContent';

export interface IAppProps {
}


export function Card (props: IAppProps) {

    // let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
    // let itemList=[];
    // items.forEach((item,index)=>{
    // itemList.push( <li key={index}>{item}</li>)
    // })

    // let output = [];
    // Object.keys(data).map(key => {
    //     data[]
    // })

    return (
        <div>
            <CardContainer>
                <ImageContainer hasColorOverlay={true}>
                    <StyledImage
                        alt='ah'
                        src={profile}
                        layout='intrinsic'
                        style={{objectFit: 'cover'}}
                        // fill
                    />
                </ImageContainer>
                <CardTextContainer>
                    <CardTitle>Get<WordHighlight> insights </WordHighlight>that help your business grow.</CardTitle>
                    <CardText>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</CardText>
                    <CardStats>
                        
                        {Object.keys(data).map((key: string) => {
                            return (
                                <Stat>
                                    <StatNumber>{data[key].stats}</StatNumber>
                                    <StatDescription>{data[key].description.toUpperCase()}</StatDescription>
                                </Stat>
                            )
                        })}
                    </CardStats>
                </CardTextContainer>
            </CardContainer>
        </div>
    );
}
