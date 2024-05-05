import React, { useState } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import botsData from './db.json';
import './App.css';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  return (
    <div className="App">
      <YourBotArmy enlistedBots={enlistedBots} />
      <BotCollection bots={botsData.bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;

