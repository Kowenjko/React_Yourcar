import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { SCREENS } from '../../responsive';

import JeepImg from "../../../assets/images/White-Range-Rover.png"

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;
const CarContainer = styled.div`
    width:auto;
    height:15em;
    margin-left:-30px;
    img{
        width:auto;
        height:100%;
    }

    @media(min-width:${SCREENS.md}){
        height:20em;
    }
    @media(min-width:${SCREENS.lg}){
        height:25em;
    }
    @media(min-width:${SCREENS["2xl"]}){
        height:30em;
        margin-left:0;
    }
    `;
const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;
const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;
const InfoText = styled.p`
    ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4

    `};
`;



export function AboutUs() {
    return <AboutUsContainer>
        <CarContainer>
            <img src={JeepImg} alt="Car" />
        </CarContainer>
        <InfoContainer>
            <Title>
                Fell The Best Experience With Our Rental Deals
            </Title>
            <InfoText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>

}