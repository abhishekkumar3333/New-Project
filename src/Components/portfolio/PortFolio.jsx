import React, { useState } from 'react';
import Banner from './Banner';

import portfolio from '../../assets/1.webp';
import portfolio2 from '../../assets/2.webp';
import portfolio3 from '../../assets/3.webp';
import portfolio4 from '../../assets/4.webp';
import portfolio5 from '../../assets/5.webp';
import portfolio6 from '../../assets/6.webp';

const PortFolio = () => {
    const tabs = [
        { name: 'All', key: 'all' },
        { name: 'Branding', key: 'branding' },
        { name: 'Illustration', key: 'illustration' },
        { name: 'Photography', key: 'photography' },
        { name: 'Web Design', key: 'webdesign' },
    ];

    const [activeTab, setActiveTab] = useState('all');

    const tabData = {
        all: [
            { image: portfolio, title: 'Fimlor Experience', subtitle: 'graphic' },
            { image: portfolio2, title: 'Fimlor Experience', subtitle: 'graphic' },
            { image: portfolio3, title: 'Fimlor Experience', subtitle: 'graphic' },
            { image: portfolio4, title: 'Fimlor Experience', subtitle: 'graphic' },
            { image: portfolio5, title: 'Fimlor Experience', subtitle: 'graphic' },
            { image: portfolio6, title: 'Fimlor Experience', subtitle: 'graphic' },
        ],
        branding: [
            { image: portfolio2, title: 'Fimlor Experience brand', subtitle: 'graphic' },
            { image: portfolio6, title: 'Fimlor Experience brand', subtitle: 'graphic' },
            { image: portfolio4, title: 'Fimlor Experience brand', subtitle: 'graphic' },
        ],
        illustration: [
            { image: portfolio, title: 'Fimlor Experience illustration', subtitle: 'graphic' },
            { image: portfolio3, title: 'Fimlor Experience illustration', subtitle: 'graphic' },
            { image: portfolio2, title: 'Fimlor Experience illustration', subtitle: 'graphic' },
            { image: portfolio5, title: 'Fimlor Experience illustration', subtitle: 'graphic' },
        ],
        photography: [
            { image: portfolio, title: 'Fimlor Experience photography', subtitle: 'graphic' },
            { image: portfolio6, title: 'Fimlor Experience photography', subtitle: 'graphic' },
            { image: portfolio4, title: 'Fimlor Experience photography', subtitle: 'graphic' },
            { image: portfolio2, title: 'Fimlor Experience photography', subtitle: 'graphic' },
        ],
        webdesign: [
            { image: portfolio, title: 'Fimlor Experience web design', subtitle: 'graphic' },
            { image: portfolio2, title: 'Fimlor Experience web design', subtitle: 'graphic' },
            { image: portfolio5, title: 'Fimlor Experience web design', subtitle: 'graphic' },
            { image: portfolio3, title: 'Fimlor Experience web design', subtitle: 'graphic' },
        ],
    };

    return (
        <>
            <Banner />
            <section className="tabing-section">
                <div className="container">
                    <div className="nav">
                        <ul>
                            {tabs.map((item) => (
                                <li
                                    key={item.key}
                                    className={activeTab === item.key ? 'active' : ''}
                                    onClick={() => setActiveTab(item.key)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tabs">
                        {tabData[activeTab]?.map((item, index) => (
                            <div className="tab-item" key={index}>
                                <img src={item.image} alt={item.title} />
                                <div className="inner-card-details">
                                 
                                    <p>{item.subtitle}</p>
                                       <h3>{item.title}</h3>
                                </div>
                                 
                            </div>
                          
                        ))}
                        
                    </div>
                    <div className="loads">
                        <button>load more data</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortFolio;
