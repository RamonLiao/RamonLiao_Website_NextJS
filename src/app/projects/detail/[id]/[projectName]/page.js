"use client";

import { useProjectDetail } from "../../../../components/dataManage";
import ProjectFrame from "../../../../components/projectFrame";

export default function Page({ params }) {
  const { data, error, isLoading } = useProjectDetail(params.id);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div>Directory Page</div>
      <ProjectFrame data={data}></ProjectFrame>
    </>
  );
}
