import React from 'react';

function BotCard({ bot, enlistBot, viewBotSpecs, dischargeBot }) {
  return (
    <div className="bot-Card">
      <h3 id = "header3">{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      
      <img src={bot.avatar_url} alt={bot.name}/>
      {/* <p>Image: {bot.avatar_url}</p> */}
      <button onClick={() => viewBotSpecs(bot)}>View Details</button>
      {enlistBot && <button onClick={() => enlistBot(bot)}>Enlist</button>}
      {dischargeBot && <button onClick={() => dischargeBot(bot)} className="discharge-button">X</button>}
    </div>
  );
}

export default BotCard;
