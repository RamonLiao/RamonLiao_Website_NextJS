"use client";

import Modal from "@/components/modal";
import ProjectFrame from "@/components/projectFrame";
import ProjectsAll from "@/api/projects/projects.json";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const data = ProjectsAll.projects.filter((item) => item.id === params.id)[0];

  if (!data) {
    return <div>Failed to load</div>;
  }

  return (
    <>
      <Modal>
        <ProjectFrame data={data}></ProjectFrame>
      </Modal>
    </>
  );
}
