import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, colors, Typography } from '@mui/material';


export default function Dealed() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { cards } = state;

    const nav = () =>{
        navigate('/game');
    }
    return (
        <div className='App'>
            <header className="App-header">
                <div>{cards
                    ? <div>
                        {cards.map((card) =>
                            <div>
                                <Typography>{card.player}</Typography>
                                <Typography>{card.card.code}</Typography>
                                <img src={card.card.image} alt="card" />
                            </div>
                        )}
                        <Button onClick={nav} variant='contained'>Drinks drank</Button>
                    </div>

                    : <Typography>no cards</Typography>
                }
                </div>
            </header>
        </div>
    );
}