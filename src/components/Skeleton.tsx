import React from 'react';

const SKELETON_ROWS = 10

function Skeleton() {

  const total: number[] = Array.from(Array(SKELETON_ROWS).keys());

  return (
    <div role="progressbar">
      {total.map((a) => (
        <div key={a} className="skeleton">
          <img src="/favicon.ico" alt="Collection icon" width={20} height={20} />
          <div className="rows">
            <div>...</div>
            <div>...</div>
          </div>
        </div>
      ))}
    </div>
  )
}
    
export default Skeleton;