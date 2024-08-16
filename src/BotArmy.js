import React from 'react';
import BotCard from './BotCard';

function BotArmy({ army, dischargeBot }) {
  return (
    <div className="bot-army">
      <h2 id = "header2">Your Bot Army</h2>
      {army.map(bot => (
        <BotCard key={bot.id} bot={bot} dischargeBot={dischargeBot} />
      ))}
    </div>
  );
}

export default BotArmy;
