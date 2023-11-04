import Modal from "@/app/components/modal";

export default function Page({ params }) {
  return (
    <>
      <Modal>
        <div>Modal page</div>
        {console.log(params)}
        <div>{params.projectName}</div>
      </Modal>
    </>
  );
}
