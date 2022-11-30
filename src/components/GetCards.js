import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

function GetCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards();
    });

    const getCards = async () => {
        const { data } = await axios.get("http://localhost:8080/api/v1/card");
        setCards(data);
    };

    return Card(cards);
}

export default GetCards;