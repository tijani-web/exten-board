import React from 'react';

const ExtensionsGrid = ({ data, onToggle, onRemove }) => {
  return (
    <div className='extensions'>
      {data.map((item) => (
        <div key={item.id} className='card'>
          <div className="extension-info">
            <div className="ex-logo">
              <img src={item.logo} alt="" />
            </div>
            <div className="details">
              <div className="ext-name">{item.name}</div>
              <div className="ext-desc">{item.description}</div>
            </div>
          </div>
          <div className="dpl-btn">
            <p onClick={() => onRemove(item.id)}>Remove</p>
            <div
              className={`switch ${item.isActive ? 'active' : ''}`}
              onClick={() => onToggle(item.id)}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ExtensionsGrid;
