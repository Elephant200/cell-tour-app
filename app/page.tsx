import ClientAnimalCellDiagram from "@/components/ClientAnimalCellDiagram";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Tour of the Cell</h1>
      <p className="text-lg text-gray-600">
        Click on the labels to learn more about each organelle!
      </p>
      <div className="mt-6">
        <ClientAnimalCellDiagram />
      </div>
    </main>
  );
}
