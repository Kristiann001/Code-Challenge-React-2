import React from 'react';

function BotCollection({ bots, enlistBot }) {
  const handleEnlistClick = (bot) => {
    enlistBot(bot);
  };

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} className="card">
          <img src={bot.avatar_url} alt={bot.name} />
          <div className="container">
            <h4>
              <b>{bot.name}</b>
            </h4>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>{bot.catchphrase}</p>
            <button onClick={() => handleEnlistClick(bot)}>Enlist</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;

