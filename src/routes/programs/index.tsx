import { Link, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import * as akabaseClient from '../../api/akabase'

export const Route = createFileRoute('/programs/')({
  loader: () => fetchPrograms(),
  component: () => <ProgramListPage />,
})

const fetchPrograms = createServerFn({ method: 'GET' }).handler(async () => {
  const { data } = await akabaseClient.getProjects({ throwOnError: true })
  return data.projects
})

const ProgramListPage = () => {
  const programs = Route.useLoaderData()

  return (
    <main>
      <h1>企画一覧</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <Link to="/programs/$id" params={{ id: program.id }}>
              {program.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
