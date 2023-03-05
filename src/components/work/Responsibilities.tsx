import './Responsibilities.css';
import React from 'react';

type ResponsibilitiesProps = { items?: string[] };

function Responsibilities({ items }: ResponsibilitiesProps) {
  if (items) {
    return (
      <>
        <div className="responsibilities">
          <div className="sub-title">Key responsibilities:</div>
          <div>
            <ul>
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default Responsibilities;
