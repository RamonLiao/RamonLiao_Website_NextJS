export default function Layout({ children, modal = null }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
