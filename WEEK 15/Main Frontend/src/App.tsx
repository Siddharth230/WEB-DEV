import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        text="Add Content"
        size="md"
        startIcon={<PlusIcon size="md" />}
      />
      <Button
        variant="secondary"
        text="Share"
        size="md"
        startIcon={<ShareIcon size="md" />}
      />
      <Card />
    </div>
  );
}

export default App;
