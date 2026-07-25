import { useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';

export default function ShareButton({ targetRef, fileName = 'gezginova-wrapped' }) {
  const exportOptions = {
    quality: 1.0,
    pixelRatio: 1,
    canvasWidth: 1080,
    canvasHeight: 1920,
    width: 1080,
    height: 1920,
    style: {
      width: '1080px',
      height: '1920px',
      transform: 'scale(1)',
      transformOrigin: 'top left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundColor: '#0a0e1a',
  };

  const handleDownload = useCallback(async () => {
    if (!targetRef?.current) return;
    try {
      const dataUrl = await toPng(targetRef.current, exportOptions);
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export error:', err);
    }
  }, [targetRef, fileName]);

  const handleShare = useCallback(async () => {
    if (!targetRef?.current) return;
    try {
      const dataUrl = await toPng(targetRef.current, exportOptions);
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], `${fileName}.png`, { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'GezgiNova Wrapped',
          text: 'Seyahat istatistiklerim! 🌍✈️',
          files: [file],
        });
      } else {
        handleDownload();
      }
    } catch (err) {
      if (err.name !== 'AbortError') handleDownload();
    }
  }, [targetRef, fileName, handleDownload]);

  return (
    <div className="share-buttons">
      <button className="btn btn-primary" onClick={handleShare}>
        📤 Paylaş
      </button>
      <button className="btn btn-secondary" onClick={handleDownload}>
        📥 İndir
      </button>
    </div>
  );
}
