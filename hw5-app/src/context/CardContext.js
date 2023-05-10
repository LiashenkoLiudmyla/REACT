import { useState, useEffect, createContext } from 'react';

export const CardContext = createContext();

export const CardProvider = (props) => {
    const [cardData, setCardData] = useState( [] );

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/cards/123.json?key=778301b0')
        .then(response => {
            if(!response.ok) {
                console.log(response.status);
                console.log(response)
                throw new Error(`Ooops! Your request is unsuccessful with status: ${response.status}`)
            } else {
                return response.json()
            }
        })
        .then((cardData) => setCardData( [cardData] ))
        .catch(error => {
            console.error(error)
        })
    }, []);

    const addCard = (newCardData) => {
        setCardData(prev => [newCardData, ...cardData]) 
    }

    return (
        <CardContext.Provider value = {{
                cardData: cardData,
                addCard: addCard,
            }}>
            {props.children}
        </CardContext.Provider>
    )
}