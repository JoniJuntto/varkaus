import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, colors, Typography } from '@mui/material';
import Dealed from './Dealed';

export default function Game(){
    const navigate = useNavigate();
    const [deck, setDeck] = useState({});
    const [dealedCards, setDealedCards] = useState([])
    const cardArray = [];
     const {state} = useLocation();
     const {playerArray} = state;

     const fetchDeck = async () =>{
         try {
            const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
            const res = await fetch(url);
            const json = await res.json();
            console.log(json);
            setDeck(json)
         } catch (error) {
             console.log(error)
         }

     }

     const fetchPlayerCards = async () =>{
         for(var i=0; i<playerArray.length; i++){
                const url = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=5`
                const res = await fetch(url);
                const json = await res.json();
                playerArray[i].playerCards.push(json.cards)
                
             console.log(playerArray)
         }
     }

     const deal = () =>{
         fetchPlayerCards();
     }

     const pickCards = ( ) =>{
        for(var i=0; i<playerArray.length; i++){
            console.log(i)
            const card = playerArray[i].playerCards[0][0]
            cardArray.push({card:card, player: playerArray[i].playerName})

        }
        navigate('/deal', {state:{cards: cardArray}});
     }

     useEffect(() => {
        fetchDeck();
      }, []);
    
    return(
        <div className="App">
            <header className="App-header">
                <div>{playerArray.map((player)=>
                    <div>
                        <Typography>{player.playerName}</Typography>
                    </div>
                )}
                    <Button onClick={deal}>Deal cards</Button>
                    <Button onClick={pickCards}>Deal cards</Button>
                </div>
                <div>
                </div>
            </header>
        </div>
    );
}