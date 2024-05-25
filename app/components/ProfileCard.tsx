import React from 'react'
interface ScheduleEntry {
  day: string;
  workingHours: string;
}

interface PersonProps {
  name?: string;
  email?: string;
  phone?: string;
  picture?: string;
  schedule?: ScheduleEntry[];
  appointment?: string;
  role?: string;
}


interface ProfileCardProps{
    person: PersonProps;
}

const ProfileCard: React.FC<ProfileCardProps> = ({person}) => {
  return (
        <li key={person.email} className="flex justify-center hover:bg-indigo-800 cursor-pointer duration-700 group rounded-2xl bg-white w-full p-10">
          <div className="flex min-w-0 gap-x-4 flex-col text-center">
            <img className="h-12 w-12 flex-none self-center rounded-full bg-gray-50" src={person.picture} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 group-hover:text-white text-gray-900">{person.name}</p>
              <p className="text-sm leading-6 group-hover:text-white text-gray-900">{person.role}</p>
              <p className="mt-1  text-xs leading-5 group-hover:text-white text-gray-500">{person.email}</p>
              <p className="mt-1  text-xs leading-5 group-hover:text-white text-gray-500">{person.phone}</p>
            </div>
            <div className="flex flex-wrap justify-center align-center">
              {person.schedule && person.schedule.map((sched) => (
                <p className=" text-xs border-2 border-indigo-600 group-hover:text-white text-indigo-600 h-6 ml-2 p-1 px-2 rounded-full  mt-1 group-hover:border-white">{sched.day} {sched.workingHours}</p>
              ))}
            </div>
          </div>
        </li>
  )
}

export default ProfileCard