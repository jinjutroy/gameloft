import {
  CommunitySection,
  ContactComponent,
  DownloadVersion,
  EventSection,
  GameSection,
  InfomationSection,
  IntroduceSection,
} from "./components";

export default function HomePage() {
  return (
    <>
      <IntroduceSection />
      <DownloadVersion />
      <ContactComponent />
      <CommunitySection />
      <EventSection />
      <GameSection />
      <InfomationSection />
    </>
  );
}
