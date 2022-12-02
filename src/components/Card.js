import { deleteCard } from "../services/cards";

export default function Card(cards) {
    return (
        <div>
            {cards.map(card => (
                <div>
                    <div key={card.id} className="cardBox" style={{ backgroundImage: `linear-gradient(to right, ${card.color},  white)` }}>
                        <img src="/business.svg" alt="business" className="businessIcon" />
                        <div style={{ margin: '20px' }}>
                            <h2>{card.firstName} {card.lastName}</h2>
                            <h4>{card.title}</h4>
                            <h4>{card.email}</h4>
                            <h4>{card.phoneNumber}</h4>
                            <h4>{card.address}</h4>
                        </div>
                    </div>
                    <button type="submit" onClick={() => deleteCard(card.id)} style={{ marginLeft: 0 }}>Delete</button>
                </div>
            ))}
        </div>
    );
}