import * as React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'


 
const FooterLayout = () => {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Tally</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Tally ERP 9</a></li>
                                <li><a href="#">Instructor</a></li>
                                <li><a href="#">Information</a></li>
                                <li><a href="#">Certification</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Gallery</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Blog</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>About Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                                <li><a href="#">Inputs</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} visertechnosys.com
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default FooterLayout;


const FooterContainer = styled.footer`
    .footer-middle {
        background: black;
        padding-top: 3rem;
        color: white;
    }
    .footer-bottom {
        padding-Top :3rem;
        padding-bottom: 2rem;
    }
    ul li a:hover {
        color: green;
    }
`;