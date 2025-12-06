import ColorShapelerBody from "./components/colorShapelerBody";
import ShapelerEyes from "./components/shapelerEyes";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute">
        <ShapelerEyes type="Googler" male={true} />
        <ColorShapelerBody color="#87d1e2ff" type="Googler" />
      </div>
    </div>
  );
}
