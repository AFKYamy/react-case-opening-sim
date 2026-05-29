import SkinCard from './SkinCard'
import type { CaseItem } from '../types/case';

type CaseContentProps = {
    skins: CaseItem[];
    knives?: CaseItem[];
};

const gridClassName = "grid w-full grid-cols-[repeat(auto-fill,20rem)] justify-between gap-10 text-center";

export default function CaseContent({ skins, knives }: CaseContentProps) {
    return (
        <section className="flex flex-col gap-14">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Skins</h2>
                <div className={gridClassName}>
                    {skins.map((skin) => (
                        <SkinCard key={skin.id} skin={skin} />
                    ))}
                </div>
            </div>

            {knives && knives.length > 0 && (
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">Special Skins</h2>
                    <div className={gridClassName}>
                        {knives.map((knife) => (
                            <SkinCard key={knife.id} skin={knife} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
