import styled from "styled-components";
import Image from "next/image";


interface ImageStyling {
    readonly hasColorOverlay?: boolean;
  }

export const CardContainer = styled.div`
    max-width: 90%;
    margin: 1rem auto;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(0, 1fr);
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        display: flex;
        flex-direction: column;
        margin: 4rem auto;
        max-width: 100%;
    }
`

export const ImageContainer = styled.div<ImageStyling>`
    background-color: ${(props) => (props.hasColorOverlay ? props.theme.colors.accent : "transparent")};
    flex: 1;
    height: 100%;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        border-radius: 0.5rem 0.5rem 0rem 0rem;
    }
`

export const StyledImage = styled(Image)`
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    height: 100%;
    // width: 100%;
    // position: relative;
    filter: brightness(0.8) opacity(0.4) contrast(1.5);
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        border-radius: 0.5rem 0.5rem 0rem 0rem;
    }
`

export const CardTextContainer = styled.div`
    background: ${(props) => props.theme.colors.primary};
    flex: 1;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        border-radius: 0rem 0rem 0.5rem 0.5rem;
        flex: 3;
        padding: 1rem 1rem;
    }
`

export const CardTitle = styled.h2`
    font-size: ${(props) => props.theme.typography.smallHeader};
    font-weight: ${(props) => props.theme.font.weight.bold};
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        text-align: center;
        margin-bottom: 0.5rem; 
    }
`

export const WordHighlight = styled.span`
    color: ${(props) => props.theme.colors.accent};
`

export const CardText = styled.p`
    color: ${(props) => props.theme.colors.text} 0.75;
    opacity: 0.45;
    padding-bottom: 2rem; 
    text-align: left; 
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        text-align: center; 
        padding-bottom: 1rem; 
        padding-left: 0rem;
        padding-right: 0rem;
    }
`

export const CardStats = styled.div`
    display: grid;
    grid-template-columns: repeat(autofit, minmax(50px, 1fr));
    grid-auto-flow: column;
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
        grid-auto-flow: row;
        text-align: center;
    }
`

export const Stat = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`

export const StatNumber = styled.p`
    font-size: ${(props) => props.theme.typography.biggerText};
    margin: 0px;
`

export const StatDescription = styled.p`
    color: ${(props) => props.theme.colors.text} 0.6;
    font: ${(props) => props.theme.font.other.name};
    font-size: ${(props) => props.theme.typography.body};
    opacity: 0.4;
    margin-top: 0.5rem;
`

