export default function Page({ params }) {
  return (
    <>
      <div>Directory Page</div>
      <div> {params.projectName}</div>
    </>
  );
}
