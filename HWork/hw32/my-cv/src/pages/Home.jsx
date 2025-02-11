import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Home() {
  return (
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
         Oleksandr Stepurko
        </Typography>
        <Typography variant="body1" paragraph>
          23 years IT and 13+ years in development

          I have experience with many technologies and tools, including Java SE version up to 21, Java EE, Spring (Core, Boot, Data, Security), RxJava,
          ORM - Hibernate,
          SQL - MySQL, Postgresql, MS SQL, Oracle,
          NoSQL - MongoDB, Couchbase, Redis,
          Migration tools - Liquibase,
          Infrastructure - JAXB, Apache Tomcat, Docker, Hazelcast, RabbitMQ, JBoss,
          Build tools - Maven, Ant,
          Clouds - AWS S3, Azure DataLake,
          Testing - JUnit, Spock, Mockito, Testcontainers.
        </Typography>
      </Box>
  );
}

export default Home;
