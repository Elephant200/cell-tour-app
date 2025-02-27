import { allOrganelles } from 'contentlayer/generated'
import { notFound } from 'next/navigation';
import { getMDXComponent } from "next-contentlayer2/hooks";
import Image from 'next/image';


export default async function OrganellePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const organelle = allOrganelles.find(
      (org) => org._raw.flattenedPath === slug
    );
  
    if (!organelle) {
        notFound();
    }

    const Content = getMDXComponent(organelle.body.code);

    const formatBoolean = (value: boolean | undefined) => (value ? '✅' : '❌');


    const properties = [
        { label: 'Eukaryotic', value: organelle.eukaryotic },
        { label: 'Prokaryotic', value: organelle.prokaryotic },
        { label: 'Found in Animal Cells', value: organelle.animalCell },
        { label: 'Found in Plant Cells', value: organelle.plantCell },
        { label: 'Membrane Bound', value: organelle.membraneBound },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold">{organelle.name}</h1>

            <div className="flex justify-center my-6">
                <Image 
                    src={organelle.image!.trimEnd()} 
                    alt={organelle.name} 
                    width={300} 
                    height={300} 
                    className="rounded-lg shadow-md"
                />
            </div>

            <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <tbody>
                        {properties.map(
                            (prop) =>
                                prop.value !== undefined && (
                                    <tr key={prop.label} className="border-b border-gray-200">
                                        <td className="p-4 font-semibold text-gray-700 bg-gray-100">{prop.label}</td>
                                        <td className="p-4 text-center text-lg">{formatBoolean(prop.value)}</td>
                                    </tr>
                                )
                        )}
                </tbody>
            </table>
        <Content />
        </div>
    );
}