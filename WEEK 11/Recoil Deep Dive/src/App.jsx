import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "./store/atoms/atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
function MainApp() {
  return (
    <>
      <button>Home</button>
      <NetworkButton />
      <JobsButton />
      <MessagingButton />
      <NotificationsButton />
      <ButtonUpdater />
    </>
  );
}

function NetworkButton() {
  const count = useRecoilValue(networkAtom);
  return <button>My network ({count >= 100 ? "99+" : count})</button>;
}

function JobsButton() {
  const count = useRecoilValue(jobsAtom);
  return <button>Jobs ({count >= 100 ? "99+" : count})</button>;
}

function MessagingButton() {
  const count = useRecoilValue(messagingAtom);
  return <button>Messaging ({count >= 100 ? "99+" : count})</button>;
}

function NotificationsButton() {
  const count = useRecoilValue(notificationsAtom);
  return <button>Notifications ({count >= 100 ? "99+" : count})</button>;
}

function ButtonUpdater() {
  const setMessagingNotificationCount = useSetRecoilState(messagingAtom);
  return (
    <div>
      <button
        onClick={() => {
          setMessagingNotificationCount((c) => c + 1);
        }}>
        Me
      </button>
    </div>
  );
}

export default App;
