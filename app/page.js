"use client"

import { useState } from "react"
export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [userName, setUserName] = useState('');
  const [userName2, setUserName2] = useState('');


  const handleChange = (e) => {
    setUserName(e.target.value)
  };


  const handleGet = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if (!response.ok) {
        alert("User not found or other error occurred.")
        setUserName('');
        return
      }
      setUserName('');
      const userData = await response.json();
      setData([...data, userData]);
      console.log(userData.following)
      setUserName('')


    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  const handleGet2 = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if (!response.ok) {
        alert("User not found or other error occurred.")
        setUserName2('');
        return
      }
      setUserName2('');
      const userData2 = await response.json();
      setData2([userData2]);
      console.log(userData2.following)
      setUserName2('')


    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <>


      <div className="bg-[#D6EFFF] pt-10 pb-72 min-w-full ">
        <div className="    ">
          <div className="ok1">Github User Finder</div>




          {data2.map((userData, i) => (
            <div key={i} className="border-b  font-medium  border-[#33B1FF]">
              <div className="grid justify-items-center">
                <div className="px-6 py-3   text-center font-medium text-[#33B1FF]  rounded-full"> <img src={userData.avatar_url} alt="asd" width={250} className="rounded-full text-center" height={250} /></div>
              </div>
              <div className=" flex justify-around">
                <div className="px-6 py-3 text-left text-l font-medium text-[#33B1FF] uppercase tracking-wider"> Name : {userData.name}</div>
                <div className="px-6 py-3 text-left text-l font-medium text-[#33B1FF] uppercase tracking-wider"> Followers :{userData.followers}</div>
                <div className="px-6 py-3 text-left text-l font-medium text-[#33B1FF] uppercase tracking-wider"> Following :{userData.following}</div>
                <div className="px-6 py-3 text-left text-l font-medium text-[#33B1FF] uppercase tracking-wider"> Public repos : {userData.public_repos}</div>
              </div>

            </div>
          ))}

          <div className="text-center py-10">
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your user name"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="text-center" onClick={handleGet2}><button onClick={handleGet} className="bg-[#33B1FF] hover:bg-[#1FA9FF] text-white font-bold py-2 px-4 rounded">
            Get Data
          </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b  font-medium  border-[#33B1FF]">
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Profile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Followers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Following</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Public repos</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">Github</th>

                </tr>
              </thead>


              <tbody>
                {data.map((userData, i) => (
                  <tr key={i} className="border-b  font-medium  border-[#33B1FF]">
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{i + 1}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider rounded-full"> <img src={userData.avatar_url} alt="asd" width={75} className="rounded-full" height={75} /></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{userData.login}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{userData.followers}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{userData.following}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{userData.public_repos}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#33B1FF] uppercase tracking-wider">{userData.url}</th>

                  </tr>
                ))}



              </tbody>

            </table>



          </div>
        </div>
      </div>

    </>
  )
}
