import Link from 'next/link';

export default function SpeakersPage() {
    return (
        <>
            <div className="heading1">
                <span className="upcoming_speakers">Upcoming Speakers-2023 &gt;&gt;&gt;</span>
                <button className="speaker_2023_new">
                    <Link href="/speakers">
                        <span className="link">Upcoming Speakers-2023</span>
                    </Link>
                </button>
            </div>
            <hr className="line"></hr>
            <div className="heading2">
                {/* <h1 className="past_speakers">
                    Past Speakers(2017-2022)
                </h1> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className="speaker_2023">
                            <Link href="/speakers">
                                <span className="link">Speakers-2022</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className="speaker_2023">
                            <Link href="/speakers">
                                <span className="link">Speakers-2021</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className="speaker_2023">
                            <Link href="/speakers">
                                <span className="link">Speakers-2020</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className="speaker_2023">
                            <Link href="/speakers">
                                <span className="link">Speakers-2019</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className="speaker_2023">
                            <Link href="/speakers">
                                <span className="link">Speakers-2018</span>
                            </Link>
                        </button>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <button className="speaker_2023">
                            <Link href="/speakers">
                                <span className="link">Speakers-2017</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <hr className="line"></hr>

            {/* <SpeakerspansRow /> */}
            <style jsx>{`
            .past_speakers{
                font-weight: bolder;
                font-size: xx-large;
            }
            .upcoming_speakers{
                font-size: xx-large ;
                font-weight: bold;
            }
      .speaker_2023_new{
                   background: linear-gradient(to right, red, white);
                    height:50px;
                    border-radius:15px;
                 }
      .line {
        background: linear-gradient(to right, white, black, red, black, white);
        height: 5px;
        width: 100%;
      }
      
      .heading1 ,.heading2{
        text-align:center;
        color:red;
        padding:5px;
      }
      .container {
        margin: 0 auto;
      }
      
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      
      .col-lg-2, .col-md-4, .col-sm-6 {
        // margin-bottom: 20px;
        padding:5px
      }
      
      .speaker_2023 {
        padding: 15px;
        background: linear-gradient(to right, white, red);
        border-radius:10px;
        cursor: pointer;
        transition: all 0.3s ease;

      }
      
      .link {
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size:large;
      }
    @media only screen (min-width:367px) and (max-width:576px){
        .container{
            margin: 10px;
        }
    }
        
      `}</style>
        </>
    );
}
