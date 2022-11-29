import axios from 'axios';
import { useEffect, useState } from 'react';

function GetCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards();
    });

    const getCards = async () => {
        const { data } = await axios.get("http://localhost:8080/api/v1/card");
        setCards(data);
    };

    return (
        <div>
            {cards.map(card => (
                <div key={card.id} className="cardBox">
                    <h4>{card.firstName} {card.lastName}</h4>
                    <h4>{card.title}</h4>
                    <h4>{card.email}</h4>
                    <h4>{card.phoneNumber}</h4>
                </div>
            ))}
        </div>
    );
}

export default GetCards;