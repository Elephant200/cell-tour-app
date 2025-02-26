import { Organelle } from 'contentlayer/generated';
import Link from 'next/link';

export default function PostCard(organelle: Organelle) {
    return (
      <div className="mb-8">
        <h2 className="mb-1 text-xl">
          <Link href={organelle.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {organelle.name}
          </Link>
        </h2>
        <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: organelle.body.html }} />
      </div>
    )
  }