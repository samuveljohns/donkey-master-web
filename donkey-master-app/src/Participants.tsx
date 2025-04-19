import React from 'react';
import './Participants.css';

interface Participant {
    id: number;
    name: string;
}

interface ParticipantsProps {
    participants: Participant[];
}

function getInitials(name: string): React.ReactNode {
    const initials = name
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase())
        .join('');
    return initials;
}
const Participants: React.FC<ParticipantsProps> = ({ participants }) => {
    
    return (
        <div>
            <ul className='participants-list'>
                {participants.map((participant) => (
                    <li className='participant-avatar' key={participant.id}>
                        <span className='avatar'>
                            {getInitials(participant.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Participants;