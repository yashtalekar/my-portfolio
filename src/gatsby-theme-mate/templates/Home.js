import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
import Footer from 'gatsby-theme-mate/src/components/Footer';

// Sections that will fetch data for you
import Landing from 'gatsby-theme-mate/src/sections/Landing';
import About from 'gatsby-theme-mate/src/sections/About';
import Projects from 'gatsby-theme-mate/src/sections/Projects';
import Writing from 'gatsby-theme-mate/src/sections/Writing';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <Projects />
    <About />
    <Writing />
    <Footer />
  </Layout>
);

export default Home;