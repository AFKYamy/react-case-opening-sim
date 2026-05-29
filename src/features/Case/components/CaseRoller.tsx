import { rarityColorClasses, type CaseItem } from "../types/case";

type CaseRollerProps = {
    skins: CaseItem[];
};

export default function CaseRoller({ skins }: CaseRollerProps) {
    return (
        <div className="relative flex w-full items-center overflow-hidden rounded-xl bg-surface-secondary px-6 py-5">
            <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-1 -translate-x-1/2 bg-neutral-50"></div>

            <div className="flex min-h-44 gap-4 overflow-hidden">
                {skins.map((skin) => (
                    <div
                        key={skin.id}
                        className={`grid h-40 w-36 shrink-0 grid-rows-[1fr_3rem] rounded-lg px-3 py-3 text-center shadow-lg ${rarityColorClasses[skin.rarity]}`}
                    >
                        <div className="flex min-h-0 items-center justify-center">
                            <img
                                src={skin.image}
                                alt={`${skin.weapon} ${skin.skin}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <div className="self-end">
                            <p className="truncate text-sm font-bold leading-tight text-text">{skin.weapon}</p>
                            <p className="truncate text-xs leading-tight text-text/80">{skin.skin}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
