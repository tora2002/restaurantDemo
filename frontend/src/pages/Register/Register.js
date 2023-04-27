import React from 'react';
import './Register.css';
//import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import UploadButton from '../../components/UploadButton/UploadButton';

function Register() {
    return(
    <>
        <Header />
            <div className='register-mainContainer'>
                <div className='register-cardContainer'>
                    <Card content={
                        <div className='register-cardContent'>
                             <div className='register-inputContainer'>
                                <Input 
                                    className={'register-button'}
                                    placeholder={'email'}
                                />
                                <Input 
                                    className={'register-button'}
                                    placeholder={'confirm password'}
                                />
                            </div>

                            <div className='register-inputContainer'>
                                <Input
                                    className={'register-button'} 
                                    placeholder={'password'}
                                />
                                <Input 
                                    className={'register-button'}
                                    placeholder={'username'}
                                />
                            </div>
                            <div className='register-inputContainer1'>
                                <div className='register-description'>    
                                    <Input
                                        className={'register-description-button'} 
                                        placeholder={'description (250 words max)'}                                           
                                        />
                                </div>
                               <div className='register-upload'>
                                    <UploadButton />    
                                </div> 
                            </div>
                            <div className='register-buttonContainer'>
                                <Button text={
                                    <p className='register-buttonText'>Register</p>
                                }
                                />
                            </div>
                        </div>
                    } isFloating={true}/>    
                    </div>
            </div>        
        </>
    )
}

export default Register;