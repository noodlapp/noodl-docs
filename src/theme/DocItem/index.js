import React from 'react';
import DocItem from '@theme-original/DocItem';
import css from './DocItemWrapper.module.scss';

export default function DocItemWrapper(props) {
  const docItemRootRef = React.useRef();
  const [lightboxAsset, setLightboxAsset] = React.useState(null);

  function handleImageClick(e) {
    setLightboxAsset({
      src: e.target.src,
      type: e.target.tagName,
    });
  }

  React.useEffect(() => {
    if (!docItemRootRef.current) return;

    const images = Array.from(docItemRootRef.current.querySelectorAll('img'));
    const videos = Array.from(docItemRootRef.current.querySelectorAll('video'));

    [...images, ...videos].forEach((asset) => {
      asset.style.cursor = 'pointer';
      asset.addEventListener('click', handleImageClick);
    });

    return () => {
      [...images, ...videos].forEach((asset) => {
        asset.removeEventListener('click', handleImageClick);
      });
    };
  }, [docItemRootRef.current]);

  return (
    <>
      {lightboxAsset && (
        <div className={css['Lightbox']} onClick={() => setLightboxAsset(null)}>
          <div className={css['LightboxImageContainer']}>
            <button className={css['LightboxClose']}>✕</button>
            {lightboxAsset.type === 'IMG' && (
              <img className={css['LightboxAsset']} src={lightboxAsset.src} />
            )}

            {lightboxAsset.type === 'VIDEO' && (
              <video
                className={css['LightboxAsset']}
                src={lightboxAsset.src}
                autoPlay
                loop
              />
            )}
          </div>
        </div>
      )}
      <div ref={docItemRootRef} className={css['Root']}>
        <DocItem {...props} />
      </div>
    </>
  );
}
