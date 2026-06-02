import { useEffect, useRef, useState } from "react";
import { getRollerTargetTranslate } from "../lib/roller";

type UseRollerLayoutParams = {
    hasRollItems: boolean;
    hasRollStarted: boolean;
    targetIndex: number;
};

export default function useRollerLayout({
    hasRollItems,
    hasRollStarted,
    targetIndex,
}: UseRollerLayoutParams) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const updateContainerWidth = () => {
            setContainerWidth(container.clientWidth);
        };

        updateContainerWidth();

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", updateContainerWidth);

            return () => {
                window.removeEventListener("resize", updateContainerWidth);
            };
        }

        const resizeObserver = new ResizeObserver(updateContainerWidth);
        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const targetTranslate = getRollerTargetTranslate({
        containerWidth,
        targetIndex,
    });

    return {
        containerRef,
        translateX: hasRollItems && hasRollStarted ? targetTranslate : 0,
    };
}
