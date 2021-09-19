import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import { Car } from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import "@brainhubeu/react-carousel/lib/style.css"
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../responsive';

import Rover from '../../../assets/images/Land-Rover-Range-Rover-Blue.png'
import Mercedes from '../../../assets/images/Mercedes-Benz.png'
import Porsche from '../../../assets/images/Porsche-Panamera.png'
import Bmw from '../../../assets/images/BMW-4.png'
import Bentley from '../../../assets/images/Bentley-Continental-GT-Speed.png'

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10

    `};
`;

const Title = styled.h2`
${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
`};
`;
const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

export function TopCars() {

    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    };

    const testCar2: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc:
            "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
    };
    const testCar3: ICar = {
        name: "Land Rover Range Rover Blue",
        mileage: "20k",
        thumbnailSrc: Rover,
        dailyPrice: 60,
        monthlyPrice: 1700,
        gearType: "Manual",
        gas: "Disel",
    };
    const testCar4: ICar = {
        name: "Mercedes Benz E Class",
        mileage: "40k",
        thumbnailSrc: Mercedes,
        dailyPrice: 70,
        monthlyPrice: 2100,
        gearType: "Auto",
        gas: "Disel",
    };
    const testCar5: ICar = {
        name: "Porsche Panamera",
        mileage: "10k",
        thumbnailSrc: Porsche,
        dailyPrice: 10,
        monthlyPrice: 1200,
        gearType: "Auto",
        gas: "Petrol",
    };
    const testCar6: ICar = {
        name: "BMW 4 Series",
        mileage: "15k",
        thumbnailSrc: Bmw,
        dailyPrice: 15,
        monthlyPrice: 1290,
        gearType: "Auto",
        gas: "Disel",
    };
    const testCar7: ICar = {
        name: "Bentley Continental GT Speed",
        mileage: "150k",
        thumbnailSrc: Bentley,
        dailyPrice: 170,
        monthlyPrice: 3590,
        gearType: "Auto",
        gas: "Disel",
    };
    const cars = [
        <Car {...testCar3} />,
        <Car {...testCar2} />,
        <Car {...testCar5} />,
        <Car {...testCar} />,
        <Car {...testCar4} />,
        <Car {...testCar6} />,
        <Car {...testCar7} />,
    ]

    const numberOfDogs = isMobile ? cars.length : Math.ceil(cars.length / 3)
    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>
            <Carousel value={current} onChange={setCurrent} slides={cars}
                plugins={[
                    "clickToChange",
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3,
                        },
                    },
                ]}
                breakpoints={{
                    640: {
                        plugins:
                            [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1,
                                    },
                                },
                            ]
                    },
                    900: {
                        plugins:
                            [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2,
                                    },
                                },
                            ]
                    }
                }}
            />
            <Dots value={current} onChange={setCurrent} number={numberOfDogs} />

        </CarsContainer>
    </TopCarsContainer>
}