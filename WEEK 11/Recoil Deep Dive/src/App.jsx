import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom } from "./store/atoms/atom";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  return (
    <RecoilRoot>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>
      <button>Me</button>
    </RecoilRoot>
  );
}

export default App;
