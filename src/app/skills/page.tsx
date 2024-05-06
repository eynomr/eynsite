import React from 'react'
import { SectionContainer, SectionContent } from '~/components/Section'
import SectionTitle from '~/components/Section/SectionTitle'

export default function SkillsPage() {
  return (
    <div className='flex flex-col justify-center items-center gap-1600 w-[780px] mx-auto'>
      <SectionContainer>
        <SectionTitle title='Programming' />
        <SectionContent>
          <div className="prose text-primary font-mono">
            <p>
              Python data and backend
            </p>
            <p>
              React and Next.js
            </p>
            <p>
              Typescript and Javascript
            </p>
          </div>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title='Data Engineering' />
        <SectionContent>
          <div className="prose text-primary font-mono">
            <p>
              python
            </p>
          </div>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title='SQL' />
        <SectionContent>
          <div className="prose text-primary font-mono">
            <p>
              BigQuery
            </p>
            <p>
              Clickhouse
            </p>
            <p>
              MySql
            </p>
            <p>
              Postgres
            </p>
          </div>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title='DAG Tools' />
        <SectionContent>
          <div className="prose text-primary font-mono">
            <p>
              Airflow
            </p>
            <p>
              Mage.ai
            </p>
            <p>
              Dagster
            </p>
          </div>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title='Devops' />
        <SectionContent>
          <div className="prose text-primary font-mono">
            <p>
              Docker
            </p>
            <p>
              Kubernetes
            </p>
            <p>
              CI/CD
            </p>
          </div>
        </SectionContent>
      </SectionContainer>
    </div>
  )
}
