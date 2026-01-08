"use client";

import { LazyImage } from "@/components/lazy-image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React from "react";

// Local gallery assets (public/tiles) with SEO-optimized alt text
const imageData = [
	{ file: "beige-subway-tile-shower-tan-accent-tiles.avif", alt: "Beige subway tile shower with tan accent border — bathroom tile installation in the Hamptons" },
	{ file: "black-marble-slab-tile-installation-white-veining-shower.avif", alt: "Black marble slab shower tile with white veining — luxury bathroom remodel in East Hampton" },
	{ file: "black-vessel-sink-closeup-concrete-countertop-led-mirror-modern-bathroom.avif", alt: "Modern bathroom vanity with black vessel sink and concrete countertop — East Hampton tile work" },
	{ file: "classic-hexagon-tile-floor-installation-black-border-pattern.avif", alt: "Classic hexagon bathroom floor tile with black border pattern — Hamptons tile installation" },
	{ file: "colorful-geometric-tile-midcentury-modern-gold-fixtures.avif", alt: "Colorful geometric tile feature wall with gold fixtures — midcentury modern bathroom in East Hampton" },
	{ file: "dark-marble-luxury-bathroom-tile-gold-fixtures.avif", alt: "Dark marble bathroom tile with gold fixtures — luxury remodel in the Hamptons" },
	{ file: "dark-wood-look-porcelain-tile-natural-accent-stripe.avif", alt: "Dark wood-look porcelain tile with natural stone accent stripe — bathroom flooring in East Hampton" },
	{ file: "double-vanity-white-floor-tile-black-vessel-sinks-his-hers-mirrors.avif", alt: "Double vanity with white floor tile and black vessel sinks — his and hers bathroom in Sag Harbor" },
	{ file: "finished-bathroom-white-floor-tile-black-ceiling-wainscoting.avif", alt: "Finished bathroom with white floor tile and black ceiling detail — East Hampton bathroom remodel" },
	{ file: "geometric-triangle-marble-floor-tile-installation-gray-white-pattern.avif", alt: "Geometric triangle marble floor tile in gray and white pattern — custom bathroom flooring in the Hamptons" },
	{ file: "gray-concrete-terrazzo-tile-square-drain-shower-floor.avif", alt: "Gray concrete terrazzo shower floor tile with square drain — modern bathroom in East Hampton" },
	{ file: "gray-marble-shower-black-hexagon-accent-dual-heads.avif", alt: "Gray marble shower walls with black hexagon floor and dual shower heads — luxury tile work in the Hamptons" },
	{ file: "gray-stacked-stone-ledger-tile-black-pebble-floor.avif", alt: "Gray stacked stone ledger tile with black pebble shower floor — spa bathroom in East Hampton" },
	{ file: "gray-wood-look-tile-accessible-bathroom-marble-chevron-floor.avif", alt: "Gray wood-look tile with marble chevron floor — accessible bathroom remodel in the Hamptons" },
	{ file: "gray-wood-look-tile-geometric-mosaic-accent-freestanding-tub.avif", alt: "Gray wood-look tile with geometric mosaic accent and freestanding tub — East Hampton luxury bathroom" },
	{ file: "luxury-bathroom-white-marble-tile-black-hexagon-floor-black-ceiling.avif", alt: "Luxury bathroom with white marble tile, black hexagon floor, and black ceiling — Hamptons high-end remodel" },
	{ file: "modern-bathroom-vanity-black-vessel-sinks-led-mirrors-pendant-lights.avif", alt: "Modern bathroom vanity with black vessel sinks and LED mirrors — East Hampton tile and vanity installation" },
	{ file: "modern-bathroom-white-subway-tile-shower-black-ceiling-freestanding-tub.avif", alt: "Modern bathroom with white subway tile shower and freestanding tub — complete remodel in the Hamptons" },
	{ file: "modern-double-vanity-black-vessel-sinks-led-mirrors-pendant-lights-bathroom.avif", alt: "Modern double vanity with black vessel sinks and pendant lights — bathroom tile work in East Hampton" },
	{ file: "modern-square-shower-drain-black-grate-gray-tile.avif", alt: "Modern square shower drain with black grate on gray tile floor — custom shower installation in the Hamptons" },
	{ file: "polished-white-marble-floor-tile-gray-veining-luxury-bathroom.avif", alt: "Polished white marble floor tile with gray veining — luxury bathroom flooring in East Hampton" },
	{ file: "tropical-botanical-feature-wall-tile-charcoal-bathroom.avif", alt: "Tropical botanical feature wall tile in charcoal bathroom — unique tile installation in the Hamptons" },
	{ file: "vintage-hexagon-tile-black-flower-border-green-bathroom.avif", alt: "Vintage hexagon tile floor with black flower border — retro bathroom remodel in East Hampton" },
	{ file: "white-floor-tile-black-fixtures-freestanding-tub-closeup.avif", alt: "White floor tile with black fixtures and freestanding tub — modern bathroom in Sag Harbor" },
	{ file: "white-hexagon-tile-black-accent-shower-floor-closeup.avif", alt: "White hexagon shower floor tile with black accent border — custom tile work in East Hampton" },
	{ file: "white-marble-black-veining-hexagon-mosaic-luxury-shower.avif", alt: "White marble hexagon mosaic with black veining — luxury shower tile installation in the Hamptons" },
	{ file: "white-marble-book-matched-slabs-dark-floor-black-fixtures.avif", alt: "Book-matched white marble slab shower walls with dark floor — high-end bathroom in East Hampton" },
	{ file: "white-marble-plank-tile-shower-hexagon-floor-black-accents.avif", alt: "White marble plank tile shower with hexagon floor and black accents — luxury remodel in the Hamptons" },
	{ file: "white-marble-porcelain-shower-tile-recessed-niches.avif", alt: "White marble porcelain shower tile with recessed storage niches — bathroom tile installation in East Hampton" },
	{ file: "white-subway-tile-herringbone-pattern-dark-grout-installation.avif", alt: "White subway tile in herringbone pattern with dark grout — shower tile installation in the Hamptons" },
	{ file: "white-subway-tile-multiple-recessed-niches-shower-installation.avif", alt: "White subway tile shower with multiple recessed niches — custom tile work in East Hampton" },
	{ file: "white-subway-tile-shower-black-pebble-floor-glass-enclosure-black-ceiling.avif", alt: "White subway tile shower with black pebble floor and glass enclosure — modern bathroom in the Hamptons" },
	{ file: "white-subway-tile-shower-corner-installation-recessed-niche-bench.avif", alt: "White subway tile shower with corner bench and recessed niche — bathroom remodel in East Hampton" },
	{ file: "white-subway-tile-shower-dark-grout-pebble-floor-black-fixtures.avif", alt: "White subway tile shower with dark grout and pebble floor — tile installation in Sag Harbor" },
	{ file: "white-tile-black-grout-cross-pattern-detail.avif", alt: "White tile with black grout in cross pattern — detailed tile work in the Hamptons" },
	{ file: "white-tile-black-grout-lines-detail-closeup.avif", alt: "White tile with perfect black grout lines closeup — precision tile installation in East Hampton" },
	{ file: "bathroom-demolition-exposed-studs-framing-renovation-progress.avif", alt: "Bathroom demolition with exposed studs and framing — renovation progress in the Hamptons" },
	{ file: "bathroom-demolition-old-beige-tile-floor-before-renovation.avif", alt: "Before photo: old beige tile floor removal — bathroom renovation in East Hampton" },
	{ file: "bathroom-remodel-before-picture-vintage-beige-tile-floor.avif", alt: "Before: vintage beige bathroom tile floor — renovation project in the Hamptons" },
	{ file: "bathroom-renovation-before-old-beige-floor-tile-demolition.avif", alt: "Before demolition: old beige floor tile — bathroom remodel in East Hampton" },
	{ file: "bathroom-renovation-progress-old-beige-tile-floor-removal.avif", alt: "Bathroom renovation in progress — old tile floor removal in the Hamptons" },
	{ file: "radiant-floor-heating-installation-bathroom-tile-prep.avif", alt: "Radiant floor heating installation before tile — heated bathroom floors in East Hampton" },
	{ file: "shower-framing-construction-exposed-studs-plywood-subfloor-renovation.avif", alt: "Shower framing construction with exposed studs — bathroom renovation in the Hamptons" },
	{ file: "shower-installation-cement-board-plumbing-prep-bathroom-construction.avif", alt: "Shower installation prep with cement board and plumbing — waterproofing work in East Hampton" },
	{ file: "white-marble-tile-installation-shower-floor-leveling-system.avif", alt: "White marble tile installation with leveling system — precision shower floor in the Hamptons" },
	{ file: "white-subway-tile-shower-installation-recessed-niche-prep.avif", alt: "White subway tile shower installation with recessed niche prep — tile work in East Hampton" },
].map((item, index) => ({
	src: `/tiles/${item.file}`,
	fallback: "https://placehold.co/1600x1200/",
	ratio: 4 / 3,
	alt: item.alt,
	index,
}));

export function ImageGallery() {
	const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
	const [isOpen, setIsOpen] = React.useState(false);

	const openLightbox = (flatIndex: number) => {
		setSelectedIndex(flatIndex);
		setIsOpen(true);
	};

	const closeLightbox = () => {
		setIsOpen(false);
		setSelectedIndex(null);
	};

	const goToPrevious = () => {
		if (selectedIndex !== null) {
			setSelectedIndex(selectedIndex === 0 ? imageData.length - 1 : selectedIndex - 1);
		}
	};

	const goToNext = () => {
		if (selectedIndex !== null) {
			setSelectedIndex(selectedIndex === imageData.length - 1 ? 0 : selectedIndex + 1);
		}
	};

	// Handle keyboard navigation
	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;
			
			if (e.key === "ArrowLeft") {
				goToPrevious();
			} else if (e.key === "ArrowRight") {
				goToNext();
			} else if (e.key === "Escape") {
				closeLightbox();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, selectedIndex]);

	// Group images into 4 columns based on index
	const columns: Array<typeof imageData[number][]> = [[], [], [], []];
	imageData.forEach((img, idx) => {
		columns[idx % 4].push(img);
	});

	const selectedImage = selectedIndex !== null ? imageData[selectedIndex] : null;

	return (
		<>
			<div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-10">
				<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
					{columns.map((columnImages, col) => (
						<div className="grid gap-4" key={col}>
							{columnImages.map((image) => (
								<LazyImage
									alt={image.alt}
									fallback={image.fallback}
									inView={true}
									key={image.src}
									ratio={image.ratio}
									src={image.src}
									onClick={() => openLightbox(image.index)}
								/>
							))}
						</div>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95 sm:max-w-[90vw]" showCloseButton={false}>
					{/* Visually hidden title for accessibility */}
					<DialogTitle className="sr-only">
						{selectedImage ? `Gallery image ${selectedIndex! + 1} of ${imageData.length}` : "Image gallery lightbox"}
					</DialogTitle>
					<div className="relative flex items-center justify-center w-full h-[90vh]">
						{/* Close button */}
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
							onClick={closeLightbox}
						>
							<X className="size-6" />
							<span className="sr-only">Close</span>
						</Button>

						{/* Previous button */}
						<Button
							variant="ghost"
							size="icon"
							className="absolute left-2 sm:left-4 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
							onClick={goToPrevious}
						>
							<ChevronLeft className="size-8" />
							<span className="sr-only">Previous image</span>
						</Button>

						{/* Image */}
						{selectedImage && (
							<img
								src={selectedImage.src}
								alt={selectedImage.alt}
								className="max-w-full max-h-[85vh] object-contain"
							/>
						)}

						{/* Next button */}
						<Button
							variant="ghost"
							size="icon"
							className="absolute right-2 sm:right-4 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
							onClick={goToNext}
						>
							<ChevronRight className="size-8" />
							<span className="sr-only">Next image</span>
						</Button>

						{/* Image counter */}
						{selectedIndex !== null && (
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
								{selectedIndex + 1} / {imageData.length}
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
