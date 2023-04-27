import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='homeRoot'>
            <Header />
            <div className='hero'>
                <div className='cardContainer'>
                    <Card content={
                        <div className='card-floating-card'>
                        <div className='cardContent'>
                            <div className='cardText'>
                                <h1 className='heading'>Taste<span>Buds</span></h1>
                                <h3 className='subheading'>Swipe ripe to be matched with your food!</h3>
                            </div>
                            <div className='buttonContainer'>
                                <Button text={
                                    <p className='buttonText'>Get Started</p>
                                }
                                onClickHandler={() => navigate("/login")}/>
                            </div>
                        </div>
                        </div>
                    } isFloating={true}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
