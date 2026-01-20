import { experiences } from "../config/experiences";
const Experience = () => {
  return (
    <div className='w-full h-full flex flex-col bg-[#EFEEEF] py-4 sm:py-6 lg:py-12'>
      <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem] header p-4 sm:p-6 lg:p-8 leading-tight sm:leading-normal'>
        Experience{" "}
      </p>
      <div className='w-full'>
        <div className='mt-5 table w-full'>
          <div className='w-full hidden lg:flex flex-row border-b-[1px] border-gray-300 px-4 sm:px-6 lg:px-8 text-base lg:text-lg'>
            <div className='w-full'>Company & Client</div>
            <div className='w-full'>Details</div>
          </div>
          <div className='w-full flex lg:hidden flex-row border-b-[1px] border-gray-300 px-4 sm:px-6 lg:px-8 text-sm sm:text-base'>
            <div className='w-full'>Company & Client/Details</div>
          </div>
          {experiences.map(
            (exp: {
              key: string;
              name: string;
              details: {
                title: string;
                year: string;
                jobDescription: string[];
              };
            }) => (
              <div
                className='relative w-full group flex flex-col lg:flex-row border-b-[1px] border-gray-300 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 text-base sm:text-lg hover:bg-gray-200 '
                key={exp.key}
              >
                <div className='w-full z-10 text-xl sm:text-2xl mb-3 lg:mb-0'>{exp.name}</div>
                <div className='w-full flex flex-col lg:flex-row z-10 gap-4 lg:gap-0'>
                  <div className='flex flex-col w-full'>
                    <p className='text-base sm:text-lg'>{exp.details.title}</p>
                    <p className='text-gray-400 text-sm sm:text-base'>{exp.details.year}</p>
                  </div>
                  <div className='flex flex-col w-full'>
                    <ul className='lg:list-disc mt-2 lg:m-0 space-y-2 text-sm sm:text-base lg:text-lg'>
                      {exp.details.jobDescription.map((desc: string, index) => (
                        <li key={index} className='leading-relaxed'>{desc}</li>
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
  );
};

export default Experience;
