import {Header} from "@/widgets/header";
import {Sidebar} from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { getCategories } from '@/entities/categories/model';
import {useDispatch} from "react-redux";

export const MainLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <div className="container content">
                <Sidebar/>
                <section className="right block">
                    <div className="main">
                        <Outlet/>
                    </div>
                </section>
            </div>


            <section className="container related block">
                <div className="cards-container">
                    <h1 className="center">Related products</h1>
                    <div className="cards-container__wrapper">
                        <div className="cards-container__item">
                            <div>
                                <img className="cards-container__image" src="./images/related.png" alt="related"/>
                                <div className="cards-container__desc">
                                    <h2>Nike ZoomX 2023</h2>
                                    <h5>Sneakers</h5>
                                </div>
                            </div>
                            <footer className="cards-container__footer">
                                <div className="footer__price">
                                    <div className="cards-container__price">99$</div>
                                    <div className="cards-container__discount">79$</div>
                                </div>
                                <div className="cards-container__count-people">9 people purchased</div>
                            </footer>
                        </div>

                        <div className="cards-container__item">
                            <div>
                                <img className="cards-container__image" src="./images/related.png" alt="related"/>
                                <div className="cards-container__desc">
                                    <h2>Nike ZoomX 2025</h2>
                                    <h5>Sneakers</h5>
                                </div>
                            </div>
                            <footer className="cards-container__footer">
                                <div className="footer__price">
                                    <div className="cards-container__price">199$</div>
                                    <div className="cards-container__discount">79$</div>
                                </div>
                                <div className="cards-container__count-people">29 people purchased</div>
                            </footer>
                        </div>

                        <div className="cards-container__item">
                            <div>
                                <img className="cards-container__image" src="./images/related.png" alt="related"/>
                                <div className="cards-container__desc">
                                    <h2>Nike ZoomX 2023</h2>
                                    <h5>Sneakers</h5>
                                </div>
                            </div>
                            <footer className="cards-container__footer">
                                <div className="footer__price">
                                    <div className="cards-container__price">999$</div>
                                    <div className="cards-container__discount">779$</div>
                                </div>
                                <div className="cards-container__count-people">93 people purchased</div>
                            </footer>
                        </div>

                        <div className="cards-container__item">
                            <div>
                                <img className="cards-container__image" src="./images/related.png" alt="related"/>
                                <div className="cards-container__desc">
                                    <h2>Nike ZoomX 2023</h2>
                                    <h5>Sneakers</h5>
                                </div>
                            </div>
                            <footer className="cards-container__footer">
                                <div className="footer__price">
                                    <div className="cards-container__price">99$</div>
                                    <div className="cards-container__discount">79$</div>
                                </div>
                                <div className="cards-container__count-people">9 people purchased</div>
                            </footer>
                        </div>

                        <div className="cards-container__item">
                            <div>
                                <img className="cards-container__image" src="./images/related.png" alt="related"/>
                                <div className="cards-container__desc">
                                    <h2>Nike ZoomX 2023</h2>
                                    <h5>Sneakers</h5>
                                </div>
                            </div>
                            <footer className="cards-container__footer">
                                <div className="footer__price">
                                    <div className="cards-container__price">99$</div>
                                    <div className="cards-container__discount">79$</div>
                                </div>
                                <div className="cards-container__count-people">9 people purchased</div>
                            </footer>
                        </div>

                    </div>

                    <div className="more-container">
                        <button className="actions-btn__btn actions-btn__primary">See more</button>
                    </div>

                </div>
            </section>

        </>
    );
};
