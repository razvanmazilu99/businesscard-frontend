import axios from 'axios';

export async function deleteCard(cardId) {
    await axios.delete(`http://localhost:8080/api/v1/card/${cardId}`);
}