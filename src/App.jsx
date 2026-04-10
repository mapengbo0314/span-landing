import { useState } from 'react';
import Navbar from './components/Navbar';
import WaitlistModal from './components/WaitlistModal';
import Landing from './pages/Landing';

export default function App() {
  const [waitlistState, setWaitlistState] = useState({ open: false, source: 'landing' });

  function openWaitlist(source) {
    setWaitlistState({ open: true, source });
  }

  function closeWaitlist() {
    setWaitlistState((current) => ({ ...current, open: false }));
  }

  return (
    <>
      <Navbar onOpenWaitlist={openWaitlist} />
      <Landing onOpenWaitlist={openWaitlist} />
      <WaitlistModal open={waitlistState.open} source={waitlistState.source} onClose={closeWaitlist} />
    </>
  );
}
