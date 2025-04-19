import { SetStateAction, useState } from "react";
import Card from "./Card";

const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const cards = suits.flatMap(suit => 
  values.map(value => ({
    id: `${value}${suit}`,
    title: value,
    content: suit,
    suit: suit,
    value: value
  }))
);

const Deck = () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const handleCardClick = (id: string | null) => {
      setActiveCard(activeCard === id ? null : id);
    };

    const groupedCards = suits.map(suit => ({
      suit,
      cards: cards.filter(card => card.suit === suit)
    }));
  
    return (
      <div className="min-h-screen flex justify-center bg-gray-100 p-4">
        <div className="flex gap-4">
          {groupedCards.map((group) => (
            <div key={group.suit} className="flex flex-col items-center">
              <div className="relative w-[100px] h-[150px] overflow-visible">
                {group.cards.map((card, index) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    onClick={() => handleCardClick(card.id)}
                    isActive={activeCard === card.id}
                    classNames={`absolute transition-all duration-500 ease-in-out transform 
                      ${activeCard === card.id 
                        ? 'translate-x-[50px]' 
                        : `translate-y-[${index * 1}px]`} 
                      `}
                    style={{
                      position: 'absolute',
                      zIndex: index+1,
                      top: `${index * 30}px`,
                      transform: `translateY(${index * 1}px) ${activeCard === card.id ? 'translateX(50px)' : ''}`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Deck;