"use client";
import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "relative flex flex-col min-h-screen w-full transition-bg",
                className
            )}
            {...props}
        >
            <div className="fixed inset-0 overflow-hidden -z-50" style={{ contain: 'strict', willChange: 'transform' }}>
                <div
                    className={cn(
                        `
          [--white-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[20px]
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora
          pointer-events-none
          absolute -inset-[10px] opacity-20 will-change-[background-position]`,

                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                    style={
                        {
                            "--blue-500": "#3b82f6",
                            "--indigo-300": "#a5b4fc",
                            "--blue-300": "#93c5fd",
                            "--violet-200": "#ddd6fe",
                            "--blue-400": "#60a5fa",
                            "--white": "#fff",
                            "--black": "#020617",
                            "--transparent": "transparent",
                        } as React.CSSProperties
                    }
                ></div>
            </div>
            {children}
        </div>
    );
};
