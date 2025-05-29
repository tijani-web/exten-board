import React, { useState } from 'react';
import SubHeading from './components/SubHeading';
import ExtensionsGrid from './components/ExtensionsGrid';
import extensionData from './data/data.json';
import Header from './components/Header';

function App() {
  const [filter, setFilter] = useState('all');
  const [extensions, setExtensions] = useState(extensionData);

  const filteredExtensions = extensions.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'active') return item.isActive;
    if (filter === 'inactive') return !item.isActive;
    return true;
  });

  const handleToggle = (id) => {
    const updated = extensions.map(ext =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    );
    setExtensions(updated);
  };

  const handleRemove = (id) => {
    const updated = extensions.filter(ext => ext.id !== id);
    setExtensions(updated);
  };

  return (
    <div className='App'>
      <Header/>
      <SubHeading filter={filter} setFilter={setFilter} />
      <ExtensionsGrid
        data={filteredExtensions}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default App;
