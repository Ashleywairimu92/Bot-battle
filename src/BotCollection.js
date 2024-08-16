import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, viewBotSpecs }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} viewBotSpecs={viewBotSpecs} />
      ))}
    </div>
  );
}

export default BotCollection;
