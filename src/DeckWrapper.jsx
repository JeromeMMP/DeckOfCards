import React,{useState, useEffect}  from "react";
import axios from 'axios';

const DeckWrapper = ({}) =>{
    const [deck, setDeck] = useState(null);
    const [cards, setCards] = useState([])
    // const deckRef = useRef()
    //setting the Deck
    useEffect(() => {
        async function getDeck (){ 
            try{
                const response = await axios({
                method: "get",
                url: "https://deckofcardsapi.com/api/deck/new/shuffle/"
                    })
                setDeck(response);
                
            }
            catch(error){
                console.error("error fetching back of card:", error);
            }
        } 
        getDeck();
    
    }, [])

  

    const getCard = () => {
        useEffect(() => {
            async function pickCard (){ 
                try{
                    const response = await axios({
                    method: "post",
                    url:` https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
                        })
                    setDeck(response);
                    console.log(response);
                }
                catch(error){
                    console.error("error fetching back of card:", error);
                }
            } 
        
    }, [])}

    // useEffect(()=>{
    //     async function getCard()
    // })

    return( 
    <div>
      <img src='https://deckofcardsapi.com/static/img/back.png' alt="DeckOfCards" />
      <button> DRAW CARD</button>
      <div></div>
    </div>
    )
}

export default DeckWrapper
