import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, colors, Typography } from '@mui/material';

export default function Game(){

    const [deck, setDeck] = useState({});
    
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
            try {
                const url = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=5`
                const res = await fetch(url);
                const json = await res.json();
                console.log(json);
                if(playerArray[i].playerCards.length <= 0){
                playerArray[i].playerCards.push(json.cards)
                }
             } catch (error) {
                 console.log(error)
             }
             console.log(playerArray)
         }
     }

     useEffect(() => {
        fetchDeck();
      }, []);
      useEffect(() => {
          if(deck){
            fetchPlayerCards();
          }
        
      }, [deck]);
    
    return(
        <div className="App">
            <header className="App-header">
                <div>{playerArray.map((player)=>
                <div>
                    <Typography>{player.playerName}</Typography>
                </div>
                )}

                </div>
            </header>
        </div>
    );
}