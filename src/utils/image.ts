/**
 * Image optimization utility for Florence Dushanbe
 * Formats Unsplash URLs to serve responsive WebP/AVIF images
 * at the exact required dimension and compression level.
 * Drastically reduces page weight on slow 3G/4G mobile connections.
 */
export function getOptimizedImageUrl(
  url: string,
  width = 500,
  quality = 70
): string {
  if (!url) return '';
  if (url.includes('images.unsplash.com')) {
    // Strip existing query parameters to avoid double params
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  return url;
}
