import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Footer from '../../components/Footer';
import NavbarComp from '../../components/Navbar';
import styles from '../../styles/Leaderboard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';

let dev = process.env.NODE_ENV !== 'production';
let { DEV_URL, PROD_URL } = process.env;
export async function getServerSideProps(ctx) {
    const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/leaderboard`, {
        method: "GET",
        });
    
    let allData = await res.json();
    return {
        props: {
            allData: allData['data']
        }
    }
}
export default function Leaderboard({allData}) {
    console.log("Client side data: ",allData);
  return (
    <div>  
        <NavbarComp/>
        <div className={styles.background}>
            <h1 className={styles.title}>Leaderboard</h1>
            <hr className={styles.line}/>
        <Table responsive bordered={false} size="md" >
        <thead>
            <tr className={`${styles.head}`}>
            <th className={`${styles.head_text}`}>Rank</th>
            <th className={`${styles.head_text}`}>Name</th>
            <th className={`${styles.head_text}`}>College</th>
            <th className={`${styles.head_text}`}>Points</th>
            </tr>
        </thead>
        <tbody>
            {allData.map((data, index) => {
                return (
                    <tr key={index} className={(index>2)?`${styles.rest}`:`${styles.top3}`}>
                        <td className={`${styles.text}`} >
                            {(index==0)?
                                <FontAwesomeIcon className={`${styles.icon}`} icon={faTrophy}/>
                                :<></>}
                                {index + 1}</td>
                        <td className={`${styles.text}`} style={{maxWidth:"20px", wordWrap:"break-word"}} ><Image roundedCircle src='https://source.unsplash.com/random' width={30} height={30}></Image>{" "}{data['name']}</td>
                        <td className={`${styles.text}`} style={{maxWidth:"20px", wordWrap:"break-word"}} >{data['college']}</td>
                        <td className={`${styles.text}`}>{data['points']}</td>
                    </tr>
                )
            }
            )}
        </tbody>
        </Table>
        <Footer/>
        </div>

    </div>
  );
}
