import { experiences } from '../config/experiences'
const Experience = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#EFEEEF] py-4 lg:py-12">
      <p className="text-7xl lg:text-[9rem] header font-bold p-4 lg:p-8">
        Experience{' '}
      </p>
      <div className="w-full">
        <div className="mt-5 table w-full">
          <div className="w-full hidden lg:flex flex-row border-b-[1px] border-gray-300 px-4 lg:px-8">
            <div className="w-full">Company & Client</div>
            <div className="w-full">Details</div>
          </div>
          <div className="w-full flex lg:hidden flex-row border-b-[1px] border-gray-300 px-4 lg:px-8">
            <div className="w-full">Company & Client/Details</div>
          </div>
          {experiences.map(
            (exp: {
              key: string
              name: string
              details: {
                title: string
                year: string
                jobDescription: string[]
              }
            }) => (
              <div
                className="relative w-full group flex flex-col lg:flex-row border-b-[1px] border-gray-300 px-4 lg:px-8 py-12 text-lg hover:bg-gray-200 "
                key={exp.key}
              >
                <div className="w-full z-10 text-2xl">{exp.name}</div>
                <div className="w-full flex flex-col lg:flex-row z-10">
                  <div className="flex flex-col w-full">
                    <p className="font-[500]">{exp.details.title}</p>
                    <p className="text-gray-400">{exp.details.year}</p>
                  </div>
                  <div className="flex flex-col w-full">
                    <ul className="lg:list-disc mt-4 lg:m-0">
                      {exp.details.jobDescription.map((desc: string, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Experience
