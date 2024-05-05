import React from 'react';

function YourBotArmy({ enlistedBots }) {
  return (
    <div style={{ background: '#8DB600', height: '600px', display: 'flex', overflowX: 'auto' }} className='header'>
      {enlistedBots.map((bot) => (
        <div key={bot.id} className="card" style={{ marginRight: '10px' }}>
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

