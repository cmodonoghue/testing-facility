import React from 'react';

import InteractionExperiment from './InteractionExperiment';
import PartyButton from './experiments/PartyButton/PartyButton';
import DarkModeToggle from './experiments/DarkModeToggle/DarkModeToggle';
import SendButton from './experiments/SendButton/SendButton';

const InteractionLab = () => {
  return (
    <div className="interaction-lab">

        <InteractionExperiment
          id="01"
          name="Party Button"
          description="Spews confetti on click."
          status="Success"
          link="https://codepen.io/cmod/pen/PoZQYpV"
        >
          <PartyButton />
        </InteractionExperiment>

        <InteractionExperiment
          id="02"
          name="Dark Mode Toggle"
          description="Dark mode toggle."
          status="Success"
          link="https://codepen.io/cmod/pen/xxZYEoR"
        >
          <DarkModeToggle />
        </InteractionExperiment>

        <InteractionExperiment
          id="03"
          name="Send Button"
          description="Simulates the sending and confirmation of a message/submission."
          status="Success"
          link="https://codepen.io/cmod/pen/QWymbxL"
        >
          <SendButton />
        </InteractionExperiment>

    </div>
  )
}

export default InteractionLab;