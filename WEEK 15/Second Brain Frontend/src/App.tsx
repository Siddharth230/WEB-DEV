import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<ShareIcon size="sm" />}
        endIcon={<PlusIcon size="sm" />}
        variant="primary"
        text="Share"
        size="sm"
      />
      <Button
        startIcon={<PlusIcon size="md" />}
        variant="secondary"
        text="Add Content"
        size="md"
      />
      <Button
        startIcon={<PlusIcon size="lg" />}
        endIcon={<ShareIcon size="lg" />}
        variant="primary"
        text="Add Content"
        size="lg"
      />
    </>
  );
}

export default App;
