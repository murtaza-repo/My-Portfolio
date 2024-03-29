import React from 'react'
import styled,{keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';

const Bounce = styled.div`animation:300ms ${keyframes`${fadeIn}`}`;

const Model = ({Payload,hideDetailItem}) => {
    const {image,name,des, link} = Payload;
    const hideDetails = () => {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('modal-open');
        hideDetailItem();
    }
    return (
        <React.Fragment>
            <div
            className="portfolio-modal modal fade show"
            id="portfolioModal1"
            style={{
            'display': 'block'
        }}
            aria-modal="true">
            <div className="modal-dialog mt-5 mb-5 modal-xl" role="document">
                <Bounce>
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" onClick={hideDetails}></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{name}</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src={image} alt=""/>
                                    <p className="mb-3">
                                        {
                                            des
                                        }
                                    </p>
                                    {link && <p className="mb-3">
                                        <a className="btn btn-success" href={link} target="_blank" rel="noreferrer">Preview <i className="fa fa-sign-out-alt"></i>
                                        </a>
                                    </p>}
                                    <button className="btn btn-danger" href="#" data-dismiss="modal" onClick={hideDetails}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Bounce>
            </div>
        </div>
        <div className="modal-backdrop fade show" id="modal-backdrop"></div>
        </React.Fragment>
    )
}

export default Model
