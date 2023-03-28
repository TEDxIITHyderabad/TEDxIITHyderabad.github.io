//carousels/Bootstrap.js
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ImageScroll.module.css"


export default function HorizontalScroll({ speakers }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        minidesktop: {
            breakpoint: { max: 1890, min: 464 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1500, min: 464 },
            items: 3
        },
        minitablet: {
            breakpoint: { max: 1100, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (<>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} removeArrowOnDeviceType={["tablet", "mobile"]}>
            {speakers && speakers.map((speaker, index) => (
                <div>
                    <img alt={speaker.name} src={speaker.image} />
                    { speaker.name && <div className={styles.speaker_name}>{speaker.name}</div>}
                    { speaker.des && <div className={styles.speaker_des}>{speaker.des}</div>}
                </div>
            ))}
        </Carousel>
    </>)
}


{/* <Carousel.Item key={item.id} className={styles.itemP} interval={2000}> */ }
