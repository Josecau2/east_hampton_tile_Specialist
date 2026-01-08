"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import React from "react";

type LazyImageProps = {
	alt: string;
	src: string;
	className?: string;
	AspectRatioClassName?: string;
	/** URL of the fallback image. default: undefined */
	fallback?: string;
	/** The ratio of the image. */
	ratio: number;
	/** Whether the image should only load when it is in view. default: false */
	inView?: boolean;
	/** Click handler for lightbox functionality */
	onClick?: () => void;
};

export function LazyImage({
	alt,
	src,
	ratio,
	fallback,
	inView = false,
	className,
	AspectRatioClassName,
	onClick,
}: LazyImageProps) {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const imgRef = React.useRef<HTMLImageElement | null>(null);
	const isInView = useInView(ref, { once: true });

	const [imgSrc, setImgSrc] = React.useState<string | undefined>(
		inView ? undefined : src
	);
	const [isLoading, setIsLoading] = React.useState(true);

	const handleError = () => {
		if (fallback) {
			setImgSrc(fallback);
		}
		setIsLoading(false);
	};

	const handleLoad = React.useCallback(() => {
		setIsLoading(false);
	}, []);

	// Load image only when inView
	React.useEffect(() => {
		if (inView && isInView && !imgSrc) {
			setImgSrc(src);
		}
	}, [inView, isInView, src, imgSrc]);

	// Handle cached images instantly
	React.useEffect(() => {
		if (imgRef.current?.complete) {
			handleLoad();
		}
	}, [handleLoad]);

	return (
		<AspectRatio
			className={cn(
				"group relative size-full cursor-pointer overflow-hidden rounded-lg border bg-accent/30 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg",
				AspectRatioClassName
			)}
			ratio={ratio}
			ref={ref}
			onClick={onClick}
		>
			{imgSrc && (
				<>
					{/* biome-ignore lint/nursery/useImageSize: dynamic image size */}
					<img
						alt={alt}
						className={cn(
							"size-full rounded-md object-cover transition-all duration-500",
							isLoading ? "opacity-0" : "opacity-100",
							"group-hover:scale-105",
							className
						)}
						decoding="async"
						fetchPriority={inView ? "high" : "low"}
						loading="lazy"
						onError={handleError}
						onLoad={handleLoad}
						ref={imgRef}
						role="presentation"
						src={imgSrc}
					/>
					{/* Hover overlay */}
					<div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
						<div className="scale-0 rounded-full bg-white/90 p-3 transition-transform duration-300 group-hover:scale-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-black"
							>
								<path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
								<path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
								<path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
								<path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
							</svg>
						</div>
					</div>
				</>
			)}
		</AspectRatio>
	);
}
