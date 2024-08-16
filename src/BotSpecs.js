import React from 'react';

function BotSpecs({ bot, enlistBot, goBack }) {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={goBack}>Go Back</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
