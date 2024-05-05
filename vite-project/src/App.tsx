import React from 'react'
import { Table, Form , Activity } from './components/Activity' 
import './App.css'

function App() {
  const [activities, setActivities] = React.useState<Activity[]>([]);

  const handleAddActivity = (date: string, distance: number) => {
    setActivities(prevActivities => [...prevActivities, { date, distance }]);
  };

  const handleDeleteActivity = (index: number) => {
    setActivities(prevActivities => prevActivities.filter((_, i) => i !== index));
  };

  const sortedActivities = activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Form onSubmit={handleAddActivity} />
      <Table data={sortedActivities} onDelete={handleDeleteActivity} />
    </>
  )
}

export default App
