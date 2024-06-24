import React,{useState, useEffect, useRef}  from "react";
import axios from 'axios';
import Card from "./Card";

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
                    .then(response => {setDeck(response.data)
                      deckRef.current = response.data.deck_id
                      })
                    .catch(error =>  console.error("error fetching back of deck:", error));
          
          console.log(deck)
          console.log(deckRef.current)
        } 
        , []);
    
    //drawingCard

    async function getCard () { 
        try{
            const cardResponse = await axios({
            method: "POST",
            url:` https://deckofcardsapi.com/api/deck/${deckRef.current}/draw/?count=1`
                })
            
            setCards([...cards, 
              {info: cardResponse.data.cards[0],
                remaining: cardResponse.data.remaining
            }])    
            console.log(cards)
        
        }
        catch(error){
            console.error("error fetching back of card:", error);
        }
    }

    const drawCard = () => {
      if(cards.length!==0 && cards[cards.length - 1].remaining === 0){
        alert("Error: no cards remaining");
      } else{
      getCard()
      }
    }
    



    return( 
    <div>
      {deck ? <img src='https://deckofcardsapi.com/static/img/back.png' alt="DeckOfCards" />  : <h1> Loading ...</h1>}
      <button onClick={drawCard}> DRAW CARD</button>
      
      <div className="CardArea">{cards.map(card => <Card key={card.info.code} imgSrc={card.info.image}/>)}</div>
    </div>
    )
}

export default DeckWrapper
