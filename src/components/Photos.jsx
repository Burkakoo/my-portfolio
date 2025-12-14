import React, { useEffect, useState } from 'react';

export default function Photos() {
  // Import all images from the photos folder (supports jpg, png, webp, svg)
  const modules = import.meta.globEager('../assets/photos/*.{png,jpg,jpeg,webp,svg}');
  // Exclude any file named `profile.*` so the navbar avatar isn't duplicated in the gallery
  const urls = Object.entries(modules)
    .filter(([path]) => !/profile\.(png|jpg|jpeg|webp|svg)$/i.test(path))
    .map(([, m]) => (m.default || m));

  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const items = await Promise.all(
        urls.map(async (src) => {
          try {
            const res = await fetch(src);
            const blob = await res.blob();
            const size = blob.size || 0;

            const img = new Image();
            const loaded = new Promise((res) => {
              img.onload = res;
              img.onerror = res;
            });
            img.src = src;
            await loaded;

            return {
              src,
              size,
              width: img.naturalWidth || img.width || 0,
              height: img.naturalHeight || img.height || 0,
            };
          } catch (e) {
            return { src, size: 0, width: 0, height: 0 };
          }
        })
      );
      if (mounted) setImages(items);
    })();
    return () => {
      mounted = false;
    };
  }, [urls]);

  if (images.length === 0) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Photos</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">No photos found. Add your images to .</p>
      </section>
    );
  }

  const formatSize = (bytes) => (bytes > 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${bytes} B`);

  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-6">Photos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <img src={img.src} alt={`photo-${i + 1}`} style={{ width: 'var(--avatar-size, 20vw)', height: 'var(--avatar-size, 20vw)' }} className="object-cover" />
            <div className="p-2 text-xs text-gray-600 dark:text-gray-300 flex justify-between">
              <span>{formatSize(img.size)}</span>
              <span>
                {img.width}×{img.height}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
