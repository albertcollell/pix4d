import React, { useState } from 'react';

export default function SimpleTableView() {
    
    const [paths, setPaths] = useState('');
    const [selected, setSelected] = useState('');

    
  
    return (
      <div>
          <div className="cards-column">
            
          </div>
          <div className="map-column">
            
          </div>
    
      </div>
    );
  }
  