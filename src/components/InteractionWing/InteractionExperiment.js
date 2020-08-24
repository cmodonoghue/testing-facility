import React from 'react';

const InteractionExperiment = ({ id, name, description, status, link, children }) => {
  return (
    <div className="interaction-item">
      <div className="interaction-item-details">
        <h4 className="interaction-item-details__id">Experiment #{ id }</h4>
        <h3 className="interaction-item-details__name">
          { name }
          <span className="interaction-item-details__status">{ status }</span>
        </h3>
        <p className="interaction-item-details__desc">{ description }</p>
        <a className="interaction-item-details__link" href={ link } target="_blank" rel="noopener noreferrer">View CodePen</a>
      </div>
      <div className="interaction-item-experiment">
        { children }
      </div>
    </div>
  )
}

export default InteractionExperiment;