import React, {useState} from 'react';
import DonationDashboardContext from '../../DonationDashboard/DonatationDshboardContext/DonationDashboardContext';
import DonationRegistration from '../DonationRegistration';

export const multiStepContext = React.createContext();

const DonationFormContext = () => {
    const [currentStep, setStep] = useState(1);
    // const [currentDashboard, setDashboard] = useState(1);

  return (
    <div>
      <multiStepContext.Provider 
      value={{currentStep, setStep}}>
        <DonationRegistration/>
      </multiStepContext.Provider>
    </div>
  )
}

export default DonationFormContext;
