import React from 'react'
import { BentoGrid, BentoGridItem } from '~/components/Grid/BentoGrid'
import { SectionContainer, SectionContent } from '~/components/Section'
import SectionTitle from '~/components/Section/SectionTitle'


export default function SkillsPage() {
  return (
    <div className='pt-1600 max-h-screen overflow-y-auto sm:px-500'>
    <BentoGrid className="max-w-5xl mx-auto">
        <BentoGridItem
          title={"Data Engineering"}
          description={"Python and SQL"}
          className={"md:col-span-4"}
        >
          <div className='prose-sm text-xs lg:text-sm font-mono'>
            <p>
            I build streaming and batch data pipelines with tools like Airflow and Mage, creating efficient workflows that make data talk. Skilled in setting up and managing databases using BigQuery, MySQL, and PostgreSQL, and designing schemas that make sense. I use Python for everything from data wrangling with Pandas and NumPy to analysis with Spark and creating visuals with Matplotlib. Also, I’m good at turning data into insights with dashboards in Tableau, Looker, and Sigma.
            </p>
          </div>
        </BentoGridItem>
        <BentoGridItem
          title={"Devops"}
          description={"Kubernetes and Docker"}
          className={"md:col-span-3"}
        >
          <div className='prose-sm text-xs lg:text-sm font-mono'>
            <p>
            I'm experienced with Docker, using it to package my applications into containers. My project, Livy, runs on a Dockerized server managed by Kubernetes on Digital Ocean. I'm still growing my Kubernetes skills. Also, I'm experienced with Git and version control, keeping projects organized and workflows efficient.
            </p>
          </div>
        </BentoGridItem>
        <BentoGridItem
          title={"AI"}
          description={"LLMs, Langchain and RAG"}
          className={"md:col-span-3"}
        >
          <div className='prose-sm text-xs lg:text-sm font-mono'>
            <p>
            I build AI applications using LLM models and Langchain's AgentExecutors. I use OpenAI and Langchain in Livy for various functionality such as research and idea generation for students, summarizing/refactoring content for better clarify and understanding. I also use RAG and vectordbs for knowledge retrieval.
            </p>
          </div>
        </BentoGridItem>
        <BentoGridItem
          title={"Software Engineering"}
          description={"TS, JS and Python"}
          className={"md:col-span-4"}
        >
          <div className='prose-sm text-xs lg:text-sm font-mono'>
            <p>
              I build end-to-end web applications with modern tools and frameworks. I've used TypeScript and Next.js to create the very website you're looking at now. On the backend, I’m comfortable with Django and Flask, which power my project Livy, making database interactions a breeze with ORM. I also have a good grounding in JavaScript, React, and some Java to round out my toolkit.
            </p>
          </div>
        </BentoGridItem>
    </BentoGrid>
    </div>
    
  )
}




// <div className='flex flex-col justify-center items-center gap-1600 w-[780px] mx-auto'>
//       <SectionContainer>
//         <SectionTitle title='Programming' />
//         <SectionContent>
//           <div className="prose text-primary font-mono">
//             <p>
//               Python data and backend
//             </p>
//             <p>
//               React and Next.js
//             </p>
//             <p>
//               Typescript and Javascript
//             </p>
//           </div>
//         </SectionContent>
//       </SectionContainer>

//       <SectionContainer>
//         <SectionTitle title='Data Engineering' />
//         <SectionContent>
//           <div className="prose text-primary font-mono">
//             <p>
//               python
//             </p>
//           </div>
//         </SectionContent>
//       </SectionContainer>

//       <SectionContainer>
//         <SectionTitle title='SQL' />
//         <SectionContent>
//           <div className="prose text-primary font-mono">
//             <p>
//               BigQuery
//             </p>
//             <p>
//               Clickhouse
//             </p>
//             <p>
//               MySql
//             </p>
//             <p>
//               Postgres
//             </p>
//           </div>
//         </SectionContent>
//       </SectionContainer>

//       <SectionContainer>
//         <SectionTitle title='DAG Tools' />
//         <SectionContent>
//           <div className="prose text-primary font-mono">
//             <p>
//               Airflow
//             </p>
//             <p>
//               Mage.ai
//             </p>
//             <p>
//               Dagster
//             </p>
//           </div>
//         </SectionContent>
//       </SectionContainer>

//       <SectionContainer>
//         <SectionTitle title='Devops' />
//         <SectionContent>
//           <div className="prose text-primary font-mono">
//             <p>
//               Docker
//             </p>
//             <p>
//               Kubernetes
//             </p>
//             <p>
//               CI/CD
//             </p>
//           </div>
//         </SectionContent>
//       </SectionContainer>
//     </div>