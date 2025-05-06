import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/Sidebar";

export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <SideBar />
      <div className="p-4 ml-72 min-h-screen bg-gray-200 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
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
        </div>
        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://x.com/akash_wt/status/1919091401104449560"
            title="Projects"
          />
          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=j-2iQca0WOg"
            title="Building API"
          />
        </div>
      </div>
    </div>
  );
}
