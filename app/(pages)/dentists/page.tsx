import ProfileCard from "@/app/components/ProfileCard";
import Link from "next/link";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    phone: "11 98655-5432",
    schedule: [
      { day: "Mon", workingHours: "08:00-17:00" },
      { day: "Tue", workingHours: "08:00-17:00" },
      { day: "Wed", workingHours: "08:00-16:00" },
    ],
    role: "Dentista",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "11 98555-1234",
    schedule: [
      { day: "Mon", workingHours: "09:00-18:00" },
      { day: "Tue", workingHours: "09:00-18:00" },
      { day: "Wed", workingHours: "09:00-17:00" },
    ],
    role: "Software Engineer",
    picture:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "11 98222-5678",
    schedule: [
      { day: "Mon", workingHours: "10:00-19:00" },
      { day: "Tue", workingHours: "10:00-19:00" },
      { day: "Wed", workingHours: "10:00-18:00" },
    ],
    role: "Graphic Designer",
    picture:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "11 98111-9876",
    schedule: [
      { day: "Mon", workingHours: "08:00-17:00" },
      { day: "Tue", workingHours: "08:00-17:00" },
      { day: "Wed", workingHours: "08:00-16:00" },
    ],
    role: "Marketing Manager",
    picture:
      "https://images.unsplash.com/photo-1502764613149-7f1d229e2307?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Jessica Davis",
    email: "jessica.davis@example.com",
    phone: "11 98777-1234",
    schedule: [
      { day: "Mon", workingHours: "07:00-15:00" },
      { day: "Tue", workingHours: "07:00-15:00" },
      { day: "Wed", workingHours: "07:00-14:00" },
    ],
    role: "Teacher",
    picture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "11 98444-5678",
    schedule: [
      { day: "Mon", workingHours: "12:00-21:00" },
      { day: "Tue", workingHours: "12:00-21:00" },
      { day: "Wed", workingHours: "12:00-20:00" },
    ],
    role: "Chef",
    picture:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    phone: "11 98333-1234",
    schedule: [
      { day: "Mon", workingHours: "08:00-17:00" },
      { day: "Tue", workingHours: "08:00-17:00" },
      { day: "Wed", workingHours: "08:00-16:00" },
    ],
    role: "Student",
    picture:
      "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "James Martinez",
    email: "james.martinez@example.com",
    phone: "11 98222-9876",
    schedule: [
      { day: "Mon", workingHours: "09:00-18:00" },
      { day: "Tue", workingHours: "09:00-18:00" },
      { day: "Wed", workingHours: "09:00-17:00" },
    ],
    role: "Lawyer",
    picture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Laura Taylor",
    email: "laura.taylor@example.com",
    phone: "11 98111-5432",
    schedule: [
      { day: "Mon", workingHours: "10:00-19:00" },
      { day: "Tue", workingHours: "10:00-19:00" },
      { day: "Wed", workingHours: "10:00-18:00" },
    ],
    role: "Journalist",
    picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    phone: "11 98777-5678",
    schedule: [
      { day: "Mon", workingHours: "08:00-17:00" },
      { day: "Tue", workingHours: "08:00-17:00" },
      { day: "Wed", workingHours: "08:00-16:00" },
    ],
    role: "Architect",
    picture:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    name: "Sophia Hernandez",
    email: "sophia.hernandez@example.com",
    phone: "11 98444-9876",
    schedule: [
      { day: "Mon", workingHours: "09:00-18:00" },
      { day: "Tue", workingHours: "09:00-18:00" },
      { day: "Wed", workingHours: "09:00-17:00" },
    ],
    role: "Nurse",
    picture:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80",
  },
];

export default function Dentists() {
  return (
    <div className="bg-white">
      <div className="right-0 w-full flex p-5 px-10 ">
        <Link href="/dentists/new">
          <button className="text-white px-5 bg-indigo-500 duration-200 hover:bg-indigo-600 py-2">
            + Add new
          </button>
        </Link>
      </div>
      <ul
        role="list"
        className=" p-10 pt-0 grid xlg:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 w-full bg-white divide-gray-300"
      >
        {people.map((person) => (
          <ProfileCard key={person.email} person={person} />
        ))}
      </ul>
    </div>
  );
}
