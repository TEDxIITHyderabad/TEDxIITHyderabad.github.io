import { useState, useEffect } from 'react';
import styles from "./ImageScroll.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCaretLeft,faCircleCaretRight} from '@fortawesome/free-solid-svg-icons';



function ImageScroll({ speakers }) {
  const [scrollPos, setScrollPos] = useState(0);

  const scrollLeft = () => {
    setScrollPos(scrollPos - imageWidth - 20);
  };
  const scrollRight = () => {
    setScrollPos(scrollPos + imageWidth + 20);
  };

  const imageWidth = speakers[0]?.width || 200;
  const containerWidth = (speakers.length) * (imageWidth + 20) * 2;
  // Duplicate the images in the container
  const duplicatedSpeakers = [...speakers, ...speakers];
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className={styles.ImgScroll}>
      <div style={{
        display: 'flex',
        width: containerWidth,
        transform: `translateX(-${scrollPos}px)`,
      }}>

        <div
          className={styles.image_scroll_container}
          style={{
            display: 'flex',
          }}
        >
          {duplicatedSpeakers.map((speaker, index) => (
            <div className={styles.image_scroll_item} key={index}>
              <img
                src={speaker.image}
                alt={speaker.name}
                width={speaker.width || 200}
                height={speaker.height || 200}
              />
              <div className={styles.speaker_name}>{speaker.name}</div>
              <div className={styles.speaker_des}>{speaker.des}</div>
            </div>
          ))}
        </div>

      </div>
      <div
        className={styles.scroll_left}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <button onClick={scrollLeft}>
        <FontAwesomeIcon icon={faCircleCaretLeft}></FontAwesomeIcon> 
        </button>
      </div>
      <div
        className={styles.scroll_Right}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <button onClick={scrollRight}>
        <FontAwesomeIcon icon={faCircleCaretRight} />
        </button>
      </div>
    </div>
  );
}

export default ImageScroll;
