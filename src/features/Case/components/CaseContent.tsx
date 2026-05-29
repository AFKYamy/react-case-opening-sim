import SkinCard from './SkinCard'
import type { CaseSkin } from '../types/case';

type CaseContentProps = {
    skins: CaseSkin[];
};

export default function CaseContent({ skins }: CaseContentProps) {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-10 text-center">
            {skins.map((skin) => (
                <SkinCard key={skin.id} skin={skin} />
            ))}
        </section>
    )
}
