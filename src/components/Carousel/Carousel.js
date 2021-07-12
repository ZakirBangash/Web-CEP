import React from 'react'
import { Carousel } from 'react-bootstrap';

const Carousell = () => {
    return (
            <Carousel indicators={false} className="home__image">
                <Carousel.Item>
                    <img
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                        alt=""
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                      className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                        alt=""
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
    )
}

export default Carousell
