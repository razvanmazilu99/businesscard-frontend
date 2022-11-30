import axios from 'axios';

export default async function DeleteCard(cardId) {
    await axios.delete(`http://localhost:8080/api/v1/card/${cardId}`);
}