export default function Wrapper({ children }) {
  return (
    <>
      <div className="flex p-4 sm:ml-64 min-h-screen">
        <div className="flex-grow p-4 rounded-lg">{children}</div>
      </div>
    </>
  );
}
