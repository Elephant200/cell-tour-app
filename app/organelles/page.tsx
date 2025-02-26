import { allOrganelles } from 'contentlayer/generated';
import OrganelleCard from '@/components/OrganelleCard';

export default function OrganellesPage() {
    return (
        <div>
            <h1>Organelles</h1>
            <ul>
                {allOrganelles.map((organelle) => (
                    <OrganelleCard key={organelle._id} {...organelle} />
                ))}
            </ul>
        </div>
    );
}
