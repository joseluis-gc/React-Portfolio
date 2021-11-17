import "./about.css"
import Me from "../../image/me.jpg"
import Php from "../../image/php.png"
import Nest from "../../image/nestjs.jfif"
import Python from "../../image/python.png"
import ReactLogo from "../../image/feature-react.png"
import Flutter from "../../image/flutter5786.jpg"
import NetCore from "../../image/logo-net-core.jpg"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"> </div>
                <div className="a-card">
                    <img src={Me} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">Lorem ipsum dolor amet.</p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui. Arcu ac tortor dignissim convallis aenean. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Elementum sagittis vitae et leo duis ut diam.
                </p>

                <div className="a-award">
                    <img src={Php} alt="" className="a-award-img"/>
                    <img src={Nest} alt="" className="a-award-img"/>
                    <img src={Python} alt="" className="a-award-img"/>
                    <img src={ReactLogo} alt="" className="a-award-img"/>
                    <img src={Flutter} alt="" className="a-award-img"/>
                    <img src={NetCore} alt="" className="a-award-img"/>
                </div>


                <div className="a-award-title">
                    <h4 className="a-award-title">What i use</h4>
                    <p className="a-desc">I'm an experienced developer with and love using these technologies, but love learning new ones.</p>
                </div>

            </div>
        </div>
    )
}

export  default  About