import React from 'react';
import scrollbar from './scrollbar.module.css';

const EmptyDrawer = () => (
  <div className={scrollbar.customScroll}>
    <div className="flex-center h-100 white">
      <h1>This drawer is empty</h1>
    </div>
  </div>
);

export default EmptyDrawer;
