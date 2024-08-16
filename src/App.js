import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import SortBar from './SortBar';
import Filter from './Filter';
import BotSpecs from './BotSpecs';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Ashleywairimu92/Bot-battle/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
      setBots(bots.filter(b => b.id !== bot.id));
    }
  };

  const dischargeBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
    fetch(`https://my-json-server.typicode.com/Ashleywairimu92/Bot-battle/bots/${bot.id}`, {
      method: 'DELETE',
    });
  };

  const viewBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const goBack = () => {
    setSelectedBot(null);
  };

  const applyFilters = (bots) => {
    if (filters.length > 0) {
      return bots.filter(bot => filters.includes(bot.bot_class));
    }
    return bots;
  };

  const sortBots = (bots) => {
    if (sortBy) {
      return [...bots].sort((a, b) => b[sortBy] - a[sortBy]);
    }
    return bots;
  };

  const filteredAndSortedBots = sortBots(applyFilters(bots));

  return (
    <div className="App">
    <h1 id = "header">Bot Battle</h1>

    <BotArmy army={army} dischargeBot={dischargeBot} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={enlistBot} goBack={goBack} />
      ) : (
        <>
          <SortBar setSortBy={setSortBy} />
          <Filter setFilters={setFilters} /> 
          <div className="collection">
          <BotCollection bots={filteredAndSortedBots} enlistBot={enlistBot} viewBotSpecs={viewBotSpecs} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
