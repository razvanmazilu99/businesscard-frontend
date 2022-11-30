import DeleteCard from "./DeleteCard";

export default function Card(cards) {
    return (
        <div>
            {cards.map(card => (
                <div key={card.id} className="cardBox">
                    <h4>{card.firstName} {card.lastName}</h4>
                    <h4>{card.title}</h4>
                    <h4>{card.email}</h4>
                    <h4>{card.phoneNumber}</h4>
                    <button onClick={() => DeleteCard(card.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}