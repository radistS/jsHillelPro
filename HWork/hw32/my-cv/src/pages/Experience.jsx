import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

// Структура даних досвіду
const experiences = [
  {
    company: "Andersen Lab",
    duration: "6 лет 8 мес.",
    roles: [
      {
        title: "Senior Java Developer",
        employmentType: "Полный рабочий день",
        dates: "янв. 2021 г. – настоящее время · 4 г. 2 мес.",
        responsibilities: [
          "Leading and managed a team, ensuring high-quality code delivery on time.",
          "Providing technical guidance to team members, reviewing code, and ensuring adherence to code standards.",
          "Collaborating with cross-functional teams to define, design, and ship new features.",
          "Contributing to the development of project plans and timelines.",
          "Participating in the full software development lifecycle, including requirements gathering, design, development, testing, deployment, and maintenance.",
          "Identifying and mitigating technical risks, and ensuring technical issues are resolved in a timely manner.",
          "Mentoring and coaching team members to improve their skills and knowledge of development best practices.",
          "Staying up-to-date with the latest trends and technologies in Java development, and sharing knowledge with the team.",
          "Managing stakeholder expectations and communicating project status updates to management.",
          "Development of new functionality."
        ]
      }
    ]
  },
  {
    company: "Andersen Lab",
    roles: [
      {
        title: "Head of Expert",
        employmentType: "Частичная занятость",
        dates: "янв. 2021 г. – настоящее время · 4 г. 2 мес.",
        responsibilities: [
          "Creating and maintaining a matrix of level/knowledge and technology assessment matrix",
          "Mentoring company employees under their Individual Development Plan (IDP)",
          "Maintaining an up-to-date training programme on technology (for trainees)",
          "Developing a community on technology",
          "Participation in the organisation and running of company technical events (including meetups)",
          "Participation in the training of employees for the role of interviewer",
          "Participation in the organisation of presales (project evaluation)"
        ],
        skills: ["Talent Management", "Education Process Optimization"]
      },
      {
        title: "Head of Java department",
        employmentType: "Частичная занятость",
        dates: "янв. 2021 г. - дек. 2022 г. · 2 г.",
        skills: ["Recruiting", "People Management", "Strategic Planning", "Business Growth Strategies"]
      }
    ]
  },
  {
    company: "Odessa Region, Ukraine",
    roles: [
      {
        title: "Java Developer",
        dates: "июль 2018 г. - дек. 2020 г. · 2 г. 6 мес.",
        skills: ["Java", "Hibernate", "JUnit", "Maven", "Spring Framework"]
      }
    ]
  },
  {
    company: "Комп'ютерная школа Hillel IT School",
    roles: [
      {
        title: "Mentor",
        employmentType: "Профессиональное обучение",
        dates: "сент. 2019 г. – настоящее время · 5 лет 6 мес.",
        location: "Одесса · Удаленная работа"
      }
    ]
  },
  {
    company: "Intersog",
    roles: [
      {
        title: "Java Developer",
        dates: "июль 2017 г. - июль 2018 г. · 1 г. 1 мес."
      }
    ]
  },
  {
    company: "The Product Engine",
    roles: [
      {
        title: "Software Developer",
        dates: "янв. 2017 г. - июль 2017 г. · 7 мес."
      }
    ]
  },
  {
    company: "EIS Group Ltd",
    roles: [
      {
        title: "Java Developer",
        dates: "сент. 2016 г. - дек. 2016 г. · 4 мес."
      }
    ]
  },
  {
    company: "UkSATSE",
    roles: [
      {
        title: "Junior Java Developer",
        dates: "дек. 2013 г. - сент. 2016 г. · 2 г. 10 мес.",
        location: "Odesa, Ukraine"
      },
      {
        title: "Senior Telecommunications Engineer",
        dates: "март 2012 г. - дек. 2013 г. · 1 г. 10 мес."
      },
      {
        title: "Telecommunications Engineer",
        dates: "июнь 2005 г. - февр. 2012 г. · 6 лет 9 мес."
      }
    ]
  }
];

const Experience = () => {
  return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Досвід роботи
        </Typography>
        {experiences.map((exp, index) => (
            <Card key={index} sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {exp.company}
                </Typography>
                {exp.duration && (
                    <Typography variant="body2" color="text.secondary">
                      Загальний досвід: {exp.duration}
                    </Typography>
                )}
                {exp.roles.map((role, roleIndex) => (
                    <Box key={roleIndex} sx={{ mt: 2 }}>
                      <Divider sx={{ mb: 1 }} />
                      <Typography variant="h6">{role.title}</Typography>
                      {role.employmentType && (
                          <Typography variant="subtitle2" color="text.secondary">
                            {role.employmentType}
                          </Typography>
                      )}
                      <Typography variant="body2" color="text.secondary">
                        {role.dates}
                      </Typography>
                      {role.location && (
                          <Typography variant="body2" color="text.secondary">
                            {role.location}
                          </Typography>
                      )}
                      {role.responsibilities && (
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="subtitle1">Обов'язки:</Typography>
                            <List dense>
                              {role.responsibilities.map((item, i) => (
                                  <ListItem key={i} sx={{ py: 0 }}>
                                    <ListItemText primary={item} />
                                  </ListItem>
                              ))}
                            </List>
                          </Box>
                      )}
                      {role.skills && (
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="subtitle1">Навички:</Typography>
                            <Typography variant="body2">
                              {role.skills.join(" · ")}
                            </Typography>
                          </Box>
                      )}
                    </Box>
                ))}
              </CardContent>
            </Card>
        ))}
      </Box>
  );
};

export default Experience;
