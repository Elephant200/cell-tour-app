import AnimalCellDiagramWrapper from "@/components/AnimalCellDiagramWrapper";
import OrganelleCard from "@/components/OrganelleCard";
import { allOrganelles, Organelle } from 'contentlayer/generated';

export default function Home() {
  const organelles = allOrganelles.sort((a, b) => 1)

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Tour of the Cell</h1>
      <p className="text-lg text-gray-600">
        Click on the labels to learn more about each organelle!
      </p>
      <div className="mt-6">
        <AnimalCellDiagramWrapper />
      </div>
      <br/>
      {organelles.map((organelle, idx) => (
        <OrganelleCard key={idx} {...organelle} />
      ))}
    </main>
  );
}
