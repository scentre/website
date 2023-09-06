import AboutBanner from '../components/AboutBanner';
import AboutInvestors from '../components/AboutInvestors';
import AboutTeam from '../components/AboutTeam';
import AboutValue from '../components/AboutValues';
import AboutVision from '../components/AboutVision';
import MeetTeam from '../components/MeetTeam';

export default function About() {
  return (
    <div className="w-full">
      <AboutBanner />
      <AboutVision />
      {/*<AboutValue />*/}
      <AboutTeam />
      <AboutInvestors />
      <MeetTeam />
    </div>
  );
}
