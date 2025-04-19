import Card from './Card';
import './Table.css';
const Table = () => {
  return (
    <div className="deck">
        <ul className="deck-list">
            <li className="deck-card">
            <Card title="2" content="" onClick={() => {}} isActive={false} />

            </li>
            <li className="deck-card">
            <Card title="2" content="♦️" onClick={() => {}} isActive={true} />

            </li>
            <li className="deck-card placeholder">
           
            <Card title="2" content="♥" onClick={() => {}} isActive={false} />
            </li>
            {/* Add more cards as needed */}
        </ul>
    </div>
  );
}
export default Table;