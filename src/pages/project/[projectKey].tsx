import { projects } from '@/app/config/projects'
import { useRouter } from 'next/router'
import Layout from '@/app/components/_layout'
import Header from '@/app/components/Header'
import { MoveLeft } from 'lucide-react'
import '@/app/styles/globals.scss'
import Router from 'next/router'

const ProjectDetails = () => {
  const router = useRouter()
  const projectKey = Array.isArray(router.query.projectKey)
    ? router.query.projectKey[0]
    : typeof router.query.projectKey === 'string'
      ? router.query.projectKey
      : undefined
  const project = projects.find((p) => p.key === projectKey)
  const NotFound = () => (
    <>
      <div className="w-full flex items-center justify-center h-screen bg-[#E3E1DF]">
        <div className="text-center p-10 rounded-md">
          <p className="text-7xl lg:text-[6rem] font-semibold p-2 lg:p-8 select-none">
            Project Not Found
          </p>
          <p className="mb-3 text-2xl text-gray-600">
            It seems like the project you&apos;re looking for doesn&apos;t
            exist.
          </p>
          <p className="mb-3 text-2xl text-gray-600">
            Please check the link or explore our other amazing projects.
          </p>
          <div className="mt-10 flex flex-row items-center gap-5 justify-center cursor-pointer">
            <MoveLeft />
            <p className="text-2xl" onClick={() => Router.back()}>
              Go Back
            </p>
          </div>
        </div>
      </div>
    </>
  )
  const HasProject = () => (
    <div className="bg-[#E3E1DF] h-screen">
      <Header />
      {project?.name}
      <div className="mt-10 flex flex-row items-center gap-5 justify-center cursor-pointer">
        <MoveLeft />
        <p className="text-2xl" onClick={() => Router.back()}>
          Go Back
        </p>
      </div>
    </div>
  )
  return <Layout>{project ? <HasProject /> : <NotFound />}</Layout>
}

export default ProjectDetails
