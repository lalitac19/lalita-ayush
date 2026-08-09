import type { Photo } from "@/lib/photos";

type Props = {
  photo: Photo;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * Responsive CDN image: phones download the 640px file, larger screens the
 * 1440px one. Fixed aspect ratio prevents layout shift while loading.
 */
export function PhotoImage({ photo, alt, sizes, className, priority }: Props) {
  // Intrinsic size keeps the browser from reflowing the page as photos arrive.
  const width = 1440;
  const height = Math.round(width / (photo.ratio || 1));

  return (
    <img
      src={photo.small}
      srcSet={`${photo.small} 640w, ${photo.large} 1440w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
