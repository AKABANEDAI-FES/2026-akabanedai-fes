import { createFileRoute, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import * as v from 'valibot'

import { getProjectsByProjectId } from '../../api/akabase'

export const Route = createFileRoute('/programs/$id')({
  loader: ({ params }) => fetchProgram({ data: params.id }),
  component: () => <ProgramDetailPage />,
})

const fetchProgram = createServerFn({ method: 'GET' })
  .validator((id) => {
    const result = v.safeParse(v.pipe(v.string(), v.uuid()), id)
    if (!result.success) throw notFound()
    return result.output
  })
  .handler(async ({ data: id }) => {
    const { data, response } = await getProjectsByProjectId({
      path: { projectId: id },
    })

    if (data === undefined) {
      if (response?.status === 404) throw notFound()
      throw new Error(`企画の取得に失敗しました (status: ${response?.status})`)
    }

    return data
  })

const ProgramDetailPage = () => {
  const program = Route.useLoaderData()

  return (
    <main>
      <h1>{program.name}</h1>
    </main>
  )
}
