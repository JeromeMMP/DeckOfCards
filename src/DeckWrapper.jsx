import React,{useState, useEffect, useRef}  from "react";
import axios from 'axios';

const DeckWrapper = () =>{
    const [deck, setDeck] = useState(null);
    const [cards, setCards] = useState([])
    const deckRef = useRef()
    //setting the Deck
    useEffect(() => {
        async function getDeck (){ 
            try{
                const {data} = await axios({
                method: "get",
                url: "https://deckofcardsapi.com/api/deck/new/shuffle/"
                    })
                setDeck(data);
                
            }
            catch(error){
                console.error("error fetching back of card:", error);
            }
        } 
        getDeck();
        deckRef.current = deck
        
    }, [])
    
    useEffect(function drawCardWhenClicked(){ 
        async function getCard () { 
            try{
                const cardResponse = await axios({
                method: "POST",
                url:` https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
                    })
                console.log(cardResponse);
            }
            catch(error){
                console.error("error fetching back of card:", error);
            }
        }
    getCard()
    }, [cards])



    return( 
    <div>
      <img src='https://deckofcardsapi.com/static/img/back.png' alt="DeckOfCards" />
      <button> DRAW CARD</button>
      <div></div>
    </div>
    )
}

export default DeckWrapper
