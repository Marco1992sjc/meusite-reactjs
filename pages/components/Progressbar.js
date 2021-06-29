




export default function Progressbar(){
    return(



<div className="container">
    <div className="progresscard">
        <div className="box">
            <div className="percent">
                <svg className="svg1">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
<h2>80<span>%</span></h2>

                </div>
            </div>
            <h2 className="text">Html</h2>
        </div>
    </div>
    <div className="progresscard">
        <div className="box">
            <div className="percent">
                <svg className="svg1">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
<h2>60<span>%</span></h2>



                </div>
            </div>
            <h2 className="text">Css3</h2>
        </div>
    </div>
    <div className="progresscard">
        <div className="box">
            <div className="percent">
                <svg className="svg1">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
<h2>40<span>%</span></h2>



                </div>
            </div>
            <h2 className="text">ReactJS/Native</h2>
        </div>
    </div>


</div>






    )
}