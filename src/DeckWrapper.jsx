import React,{useState, useEffect, useRef}  from "react";
import axios from 'axios';

const DeckWrapper = () =>{
    const [deck, setDeck] = useState(null);
    const [cards, setCards] = useState([])
    const deckRef = useRef()
    //setting the Deck
    useEffect(() => {
          axios({
                method: "get",
                url: "https://deckofcardsapi.com/api/deck/new/shuffle/"
                    })
                    .then(response => {setDeck(response.data)  })
                    .catch(error =>  console.error("error fetching back of deck:", error))
    
        } 
        // getDeck()
        // console.log(deck)
        , []);
        console.log(deck);
    
    //drawingCard
    // useEffect(() => {
    //     async function getCard () { 
    //         try{
    //             const cardResponse = await axios({
    //             method: "POST",
    //             url:` https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    //                 })
    //             console.log(cardResponse);
    //         }
    //         catch(error){
    //             console.error("error fetching back of card:", error);
    //         }
    //     }
    // getCard()
    // }, [cards])



    return( 
    <div>
      {deck ? <img src='https://deckofcardsapi.com/static/img/back.png' alt="DeckOfCards" />  : <h1> Loading ...</h1>}
      <button> DRAW CARD</button>
      <div></div>
    </div>
    )
}

export default DeckWrapper
