import React from 'react';

const SubHeading = ({ filter, setFilter }) => {
  return (
    <div className='sub-heading'>
      <div className="name">
        <h1>Extension List</h1>
      </div>
      <div className="modes">
        <p
          className={filter === 'all' ? 'active-btn' : ''}
          onClick={() => setFilter('all')}
        >All</p>
        <p
          className={filter === 'active' ? 'active-btn' : ''}
          onClick={() => setFilter('active')}
        >Active</p>
        <p
          className={filter === 'inactive' ? 'active-btn' : ''}
          onClick={() => setFilter('inactive')}
        >Inactive</p>
      </div>
    </div>
  )
}

export default SubHeading;
