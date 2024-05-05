import { useState } from "react";

export interface Activity {
  date: string;
  distance: number;
}





export function Table({ data, onDelete }: { data: Activity[], onDelete: (index: number) => void }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Distance (km)</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((activity, index) => (
                    <tr key={index}>
                        <td>{activity.date}</td>
                        <td>{activity.distance}</td>
                        <td>
                            <button onClick={() => onDelete(index)}>✘</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export function Form({ onSubmit }: { onSubmit: (date: string, distance: number) => void }) {
    const [date, setDate] = useState("");
    const [distance, setDistance] = useState<number | ''>(''); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(date, typeof distance === 'number' ? distance : 0); 
        setDate('');
        setDistance(''); 
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label htmlFor="date">Date:</label>
                <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
            </div>
            <div>
                <label htmlFor="distance">Distance (km):</label>
                <input id="distance" type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} placeholder="Distance (km)" />
            </div>
            <button type="submit">OK</button>
        </form>
    );
}




