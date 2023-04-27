import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Login() {
    const navigate = useNavigate();
    return(
        <>
        <Header />
            <div className='login-mainContainer'>
                <div className='login-cardContainer'>
                    <Card content={
                        <div className='login-cardContent'>
                            <div className = "login-textContainer">
                                <h1 className='login-heading'>Taste<span>Buds</span></h1>
                            </div>    
                            <div className='login-username'>
                                <Input className = 'login-username-button'  placeholder={'username'}
                                />
                            </div>
                            <div className='login-password'>
                                <Input className = 'login-password-button' placeholder={'password'}
                                />   
                            </div>

                            <div className='login-buttonContainer'>
                                <Button text={
                                    <p className='login-buttonText'>Login</p>
                                }
                                />
                                <Button text={
                                    <p className='login-buttonText'>Register</p>
                                }
                                onClickHandler={() => navigate("/register")}/>
                            </div>
                        </div>
                    } isFloating={true}/>    
                    </div>
            </div>        
        </>
    )
}

export default Login;
