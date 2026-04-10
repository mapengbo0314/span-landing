export default function AmbientSparks() {
  return (
    <>
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-container/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 h-[500px] w-[500px] rounded-full bg-secondary-container/10 blur-[140px] pointer-events-none" />
    </>
  );
}
