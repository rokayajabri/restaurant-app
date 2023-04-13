import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Promotions = () => {
  const promotions = useSelector(state => state.promo.data);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div class="promotions">
        <div class="heading">
            <span>promotions</span>
            <h3>Best quality with reasonable price</h3>
        </div>

        <div class="promotions-item">
            <div class="table-responsive">
                <table class="table table-bordered text-center">
                    <thead>
                        <tr class="bg-light-gray">
                            <th class="text-uppercase">Time</th>
                            <th class="text-uppercase">Monday</th>
                            <th class="text-uppercase">Tuesday</th>
                            <th class="text-uppercase">Wednesday</th>
                            <th class="text-uppercase">Thursday</th>
                            <th class="text-uppercase">Friday</th>
                            <th class="text-uppercase">Saturday</th>
                            <th class="text-uppercase">Sunday</th>
                        </tr>
                    </thead>
                    {promotions.map(item=>
                    <tbody>
                        <tr>
                            <td class="align-middle">{item.time[0]}</td>
                            <td>
                                <span class="bg-brown activity-name">{item.monday[0]}</span>
                                <div class="activity-time">{item.monday[1]}</div>
                            </td>
                            <td>
                                <span class="bg-brown activity-name">{item.monday[0]}</span>
                                <div class="activity-time">{item.monday[1]}</div>
                            </td>

                            <td>
                                <span class="bg-brown activity-name">{item.monday[0]}</span>
                                <div class="activity-time">{item.monday[1]}</div>
                            </td>
                            <td>
                                <span class="bg-brown activity-name">{item.monday[0]}</span>
                                <div class="activity-time">{item.monday[1]}</div>
                            </td>
                            <td>
                                <span class="bg-brown activity-name">{item.monday[0]}</span>
                                <div class="activity-time">{item.monday[1]}</div>
                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                        </tr>

                        <tr>
                            <td class="align-middle">{item.time[1]}</td>
                            <td>
                                <span class="bg-beige activity-name">{item.tuesday[0]}</span>
                                <div class="activity-time">{item.tuesday[1]}</div>
                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td>
                                <span class="bg-beige activity-name">{item.tuesday[0]}</span>
                                <div class="activity-time">{item.tuesday[1]}</div>
                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td>
                                <span class="bg-beige activity-name">{item.tuesday[0]}</span>
                                <div class="activity-time">{item.tuesday[1]}</div>
                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                        </tr>

                        <tr>
                            <td class="align-middle">{item.time[2]}</td>
                            <td class="bg-light-gray">

                            </td>
                            <td>
                                <span class="bg-earth activity-name">{item.wednesday[0]}</span>
                                <div class="activity-time">{item.wednesday[1]} </div>
                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td>
                                <span class="bg-earth activity-name">{item.wednesday[0]}</span>
                                <div class="activity-time">{item.wednesday[1]} </div>
                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                        </tr>

                        <tr>
                            <td class="align-middle">{item.time[4]}</td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td class="bg-light-gray">

                            </td>
                            <td>
                                <span class="bg-green activity-name">{item.thursday[0]}</span>
                                <div class="activity-time">{item.thursday[1]}</div>
                            </td>
                            <td>
                                <span class="bg-green activity-name">{item.thursday[0]}</span>
                                <div class="activity-time">{item.thursday[1]}</div>
                            </td>
                            <td>
                                <span class="bg-green activity-name">{item.thursday[0]}</span>
                                <div class="activity-time">{item.thursday[1]}</div>
                            </td>
                        </tr>
                    </tbody>
                    )}
                </table>
            </div>
        </div>
        

        <div class="promotions-item">
            <div class="content-box">
            <img src={require("../images/dis-1.jpg")} alt=""  />
            </div>
          
            <div class="description">
                <h3>party taco upto 50% off</h3>
                <ul>
                    <li>
                        <p>Order more than 10 tacos will get discount 50%</p>
                    </li>
                    <li>
                        <p>Only weekend night</p>
                    </li>
                    <li>
                        <p>Only online payment method</p>
                    </li>
                </ul>
                <Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
            </div>
        </div>
        <div class="promotions-item">
            <div class="content-box">
            <img src={require("../images/dis-2.png")} alt=""  />
            </div>

            <div class="description">
                <h3>Happy lunch upto 25% extra</h3>
                <ul>
                    <li>
                        <p>Free up size burrito</p>
                    </li>
                    <li>
                        <p>Only lunch from 10am to 2pm</p>
                    </li>
                    <li>
                        <p>Only delivery</p>
                    </li>
                </ul>
                <Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
            </div>
        </div>
        
        <div class="promotions-item">
            <div class="content-box">
            <img src={require("../images/dis-3.jpg")} alt=""  />
            </div>

            <div class="description">
                <h3>New drink 100% Cashback</h3>
                <ul>
                    <li>
                        <p>Free 01 Michelada when total bill more than $20</p>
                    </li>
                    <li>
                        <p>From 23/11/2021 to 12/12/2021</p>
                    </li>
                    <li>
                        <p>Only online payment method</p>
                    </li>
                </ul>
                <Link onClick={scrollToTop} to="menu" className="btn">order now</Link>
            </div>
        </div>

        
    </div>
    
    
  );
};

export default Promotions;
