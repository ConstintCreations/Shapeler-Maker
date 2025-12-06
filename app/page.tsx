import Shapeler from "./components/shapeler";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Shapeler color="#b787e2ff" type="Googler" mouth="Small-Wave" eyebrow="Confused" pupil="Normal" male={true} />
    </div>
  );
}
