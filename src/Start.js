import { Button, TextField } from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Start(){
    const navigate = useNavigate();

    const [playerArray, setPlayerArray] = useState([])
    const [playerName, setPlayerName] = useState("");

    const handleChange = (e) =>{
        setPlayerName(e.target.value);
    }
    const savePlayer = () =>{
        setPlayerArray([...playerArray, {
            playerName: playerName,
            playerCards: []
        }])
        console.log(playerArray);
    }

    const navTo = () =>{
        navigate('/game', {state:{playerArray: playerArray}});
    }
    
    return(
        <div className="App">
            <header className="App-header">
                <Button style={{marginBottom: 40}}variant="contained" onClick={navTo}>All ready!</Button>
                <Typography variant='h4'>Add players</Typography>
                <TextField style={{backgroundColor: 'white', borderRadius: 40, margin: 10}} value={playerName} variant='standard' onChange={handleChange}/>
                <Button onClick={savePlayer} variant='contained'>Add</Button>
                <div style={{marginTop: 40}}>{playerArray
                ?<div>{playerArray.map((player)=>
                    <Typography variant='h5'>{player.playerName}</Typography>
                )}

                </div>
                :<div>
                    <Typography variant='h3'>No players yet</Typography>
                </div>    
            }

                </div>
            </header>
        </div>
    );
}