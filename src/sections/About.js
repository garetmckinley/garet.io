import React from 'react';

import OSS from '../data/oss';
import Section from '../components/Section/index';
import Header from '../components/Header/index';
import Content from '../components/Content/index';
import Skill from '../components/Skill';
import PostList from '../components/PostList';
import List from '../components/List';

const About = ({ posts }) => {
  return (
    <Section slant="both" reversed layer={3}>
      <Header>
        <h2>About Me</h2>
      </Header>
      <Content>
        <div>
          <h2>Professional Skills</h2>
          <p>
            When it comes to front-end work, I'm comfortable working with{' '}
            <Skill>ES6</Skill>, <Skill>TypeScript</Skill>,{' '}
            <Skill>webpack</Skill>, <Skill>rollup</Skill>, <Skill>bazel</Skill>,{' '}
            <Skill>babel</Skill>, <Skill>react</Skill>,{' '}
            <Skill>react-router</Skill>, <Skill>redux</Skill>,{' '}
            <Skill>redux-saga</Skill>, <Skill>styled-components</Skill>,{' '}
            <Skill>emotion</Skill>, <Skill>Gatsby</Skill>,{' '}
            <Skill>Firebase</Skill>, <Skill>Auth0</Skill>, and{' '}
            <Skill>Stripe</Skill>.
          </p>
          <p>
            With non-front-end work, I have past experience working with{' '}
            <Skill>Node.js</Skill>, <Skill>express</Skill>,{' '}
            <Skill>electron</Skill>, <Skill>PostgreSQL</Skill>, and{' '}
            <Skill>Heroku</Skill>.
          </p>
        </div>

        <div>
          <h2>Open Source</h2>
          <List
            items={OSS.map((project) => (
              <>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
                <span>
                  : {project.description} &middot; {project.role} &middot; ★{' '}
                  {project.stars}
                </span>
              </>
            ))}
          />
        </div>

        <div>
          <h2>Writing</h2>
          <PostList posts={posts} />
        </div>
      </Content>
    </Section>
  );
};

export default About;
