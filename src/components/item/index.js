import React from 'react';
import './Item.scss'

export const Item = (
  {
    id,
    className,
  }) =>
  <div
    id={id}
    className={`Item ${className}`}
  >

  </div>
