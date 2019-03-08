import React from 'react';
import './Item.scss'

export const Item = (
  {
    id,
    className,
    data,
  }) =>
  <div
    id={id}
    className={`Item ${className}`}
  >
    {console.log('>>>>', data)}
  </div>
