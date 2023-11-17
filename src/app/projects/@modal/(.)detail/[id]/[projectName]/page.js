"use client";

import Modal from "@/components/modal";
// import { getProjectDetail } from "@/components/dataManage";
import ProjectFrame from "@/components/projectFrame";
import ProjectsAll from "@/api/projects/projects.json";
import useSWR, { unstable_serialize } from "swr";
import { useParams } from "next/navigation";

// export async function generateStaticParams() {
//   return ProjectsAll.projects.map((project) => {
//     return {
//       id: project.id,
//       projectName: project.projectName,
//     };
//   });
// }

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {
  const params = useParams();
  // const { id, projectName } = params;
  // const { data, error, isLoading } = useSWR(
  //   `/api/projects/${id}?id=${id}`,
  //   fetcher
  // );

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  const data = ProjectsAll.projects.filter((item) => item.id === params.id)[0];

  // console.log(data);
  if (!data) {
    return <div>failed to load</div>;
  }

  return (
    <>
      <Modal>
        {/* <ProjectFrame data={data}></ProjectFrame> */}
        <div>failed to load</div>;
      </Modal>
    </>
  );
}
