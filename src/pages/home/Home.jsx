import React from 'react'
import './home.css'

export default function Home(){
    function handleClick(){
        console.log("click");
    }
    return( 
        <> 
            <div className="centerContainer"> {/*Styled in index.css*/}
                <div className="columnFlex"> {/*Styled in index.css*/}
                    <h1 className="innoventure">
                        <span className="orangeText" id="inno"> {/*Class styled in index.css*/}
                            INNO
                        </span>
                        <span className="blueText" id="venture"> {/*Class styled in index.css*/}
                            VENTURE
                        </span>
                    </h1>
                    <h2 className="catchphrase">
                        <div><span>Where </span><span className="orangeText">PROBLEMS </span><span>meet </span></div><span className="blueText">SOLUTIONS</span>
                    </h2>
                    <button className="btn" onClick={() => handleClick()}>Sign Up</button>
                </div>
            </div>
        </>
    )
}