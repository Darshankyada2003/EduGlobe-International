import { useEffect } from "react";

interface SeoProps {
  title?: string;
  description?: string;
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevDesc = meta.getAttribute('content') || '';
    if (description) meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (description) meta?.setAttribute('content', prevDesc);
    };
  }, [title, description]);

  return null;
}
