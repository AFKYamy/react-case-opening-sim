import SkinCard from './SkinCard'
import type { CaseItem } from '../types/case';

type CaseContentProps = {
    skins: CaseItem[];
};

export default function CaseContent({ skins }: CaseContentProps) {
    return (
        <section className="grid w-full grid-cols-[repeat(auto-fill,20rem)] justify-between gap-10 text-center">
            {skins.map((skin) => (
                <SkinCard key={skin.id} skin={skin} />
            ))}
        </section>
    )
}
