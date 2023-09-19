import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Header from "../Components/Header";
import { AughtContext } from "../Context/MainContext";
import domain from "../hooks/domain";

const Home = () => {
  // getting single student data
  const [student, setStudent] = useState([]);
  const [studentArrayLength, setStudentArrayLength] = useState([]);
  const [group, setGroup] = useState([]);
  const [groupData, setGroupData] = useState([]);

  const navigate = useNavigate();
  const AdminLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("adminInfo")
  );

  useEffect(() => {
    if (AdminLocalStorageData?.status !== "Admin") {
      navigate("/login");
    }
  }, []);

  const { data: categorys, refetch, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(domain + `all`)
        .then((res) => res.json())
        .then((result) => setStudent(result[0])),
  });

  const student_roll_search = (e) => {
    e.preventDefault();
    const form = e.target;
    const roll = form.student_roll.value;

    fetch(domain + `/single_student_data?roll=${roll}`)
      .then((res) => res.json())
      .then((result) => {
        setStudent(result[0]);
        setStudentArrayLength(result);
      });
    refetch();
  };

  // create groups
  const createGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const group = form.GroupName.value.toUpperCase();

    const groupData = {
      groupName: group,
    };

    fetch(domain + `/single_group?group=${group}`)
      .then((res) => res.json())
      .then((result) => {
        const arrayLength = result.length;
        if (arrayLength === 1) {
          toast.error("Group already exist");
        } else {
          if (group === "") {
            toast.error("Field can not be empty");
          } else {
            fetch(domain + `/create_group`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(groupData),
            })
              .then((res) => res.json())
              .then((result) => {
                toast.success("your group has been created ");
                // console.warn(result);
                form.reset();
              });
          }
        }
      });
  };

  // getting all the groups data
  fetch(domain + `/all_groups`)
    .then((res) => res.json())
    .then((result) => setGroup(result));
  // console.warn(group);

  // assign group leader
  const assignLeader = (e) => {
    e.preventDefault();
    const from = e.target;
    const group = from.selectedGroup.value;
    const roll = from.roll.value;

    if (group === "" || roll === "") {
      toast.error("Please fill up the required fields");
    } else {
      const postData = {
        groupName: group,
        Leader: roll,
      };
      // console.log(postData);
      fetch(domain + `/assign_leader`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success("Leader assigned to group");
          // console.warn(result);
          from.reset();
        });

      const studentData = {
        groupName: group,
        roll: roll,
        status: "Leader",
      };
      fetch(domain + `/Update_student_status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
    }
  };

  // update group leader
  const updateGroupLeader = (e) => {
    e.preventDefault();
    const from = e.target;
    const group = from.group.value;
    const previousLeader = from.previous.value;
    const newLeader = from.new.value;
    if (group === "" || previousLeader === "" || newLeader === "") {
      toast.error("All fields required");
    } else {
      const PreviousStudentData = {
        groupName: group,
        roll: previousLeader,
        status: "Student",
      };
      fetch(domain + `/Update_student_status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(PreviousStudentData),
      });

      const newLeaderStudentData = {
        groupName: group,
        roll: newLeader,
        status: "Leader",
      };
      fetch(domain + `/Update_student_status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLeaderStudentData),
      });

      // assign new leader to the group
      const postData = {
        groupName: group,
        Leader: newLeader,
      };
      // console.log(postData);
      fetch(domain + `/assign_leader`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success("your post has been added");
          // console.warn(result);
          from.reset();
        });
    }
  };

  const data = useContext(AughtContext);
  // console.log(data);

  useEffect(() => {
    fetch(domain + `/get_all_register?group=A`)
      .then((res) => res.json())
      .then((result) => setGroupData(result));
  }, []);
  const groupSelect = (e) => {
    var groupName = e.target.value;
    fetch(domain + `/get_all_register?group=${groupName}`)
      .then((res) => res.json())
      .then((result) => setGroupData(result));
  };

  return (
    <div>
      <Header></Header>
      {/* search the student my class roll */}
      <div className="main-wrapper max-w-[1560px] mx-auto">
        <div className="search-student border-b grid grid-cols-3 ">
          <div className="left-part border-r pl-40 py-20 dark:text-white">
            <form
              onSubmit={student_roll_search}
              action=""
              className="flex flex-col items-start w-[25rem] font-general"
            >
              <label
                htmlFor="student_roll"
                className="font-[500] text-xl mb-2 dark:text-[#EBFF00]"
              >
                Student roll
              </label>
              <div className="search-main flex items-center gap-2 rounded-sm w-full">
                <input
                  type="number"
                  name="student_roll"
                  id=""
                  className="h-[2rem] border   focus:ring-violet-600 dark:focus:ring-[#EBFF00] dark:border-[#EBFF00] dark:bg-black"
                />
                <button className="bg-violet-200 h-[2rem] px-2 text-violet-600 border border-violet-500 rounded-sm dark:text-[#EBFF00] dark:border-[#EBFF00] dark:bg-[#eaff0069]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <p className="text-left text-violet-600 mt-3 w-[80%] font-[500] dark:text-[#EBFF00] font-general">
              ** Enter student class roll to get the details of the student.
              Please enter valid student roll.
            </p>
          </div>
          {/* right side */}
          <div className="right-part pl-20 py-20 font-general">
            {studentArrayLength.length ? (
              <>
                <h1 className="font-[500] text-violet-600 dark:text-[#EBFF00] text-xl underline text-left mb-2">
                  Student details
                </h1>
                <div className="student-details text-left">
                  <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
                    Name:{" "}
                    <span className="text-violet-600 dark:text-[#EBFF00]">
                      {student?.name}
                    </span>
                  </p>
                  <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
                    Roll:{" "}
                    <span className="text-violet-600 dark:text-[#EBFF00]">
                      {student?.roll}
                    </span>
                  </p>
                  <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
                    Section:{" "}
                    <span className="text-violet-600 dark:text-[#EBFF00]">
                      {student?.section}
                    </span>
                  </p>
                  <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
                    Group:{" "}
                    <span className="text-violet-600 dark:text-[#EBFF00]">
                      {student?.groupName}
                    </span>
                  </p>
                  <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
                    Status:{" "}
                    <span className="text-violet-600 dark:text-[#EBFF00]">
                      {student?.status}
                    </span>
                  </p>
                  <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
                    Task submission:{" "}
                    <span className="text-violet-600 dark:text-[#EBFF00]">
                      {student?.submition + "%"}
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <div className="image-holder">
                <img className="ml-[3rem] w-[14rem]" src="/images/404.svg" />
              </div>
            )}
          </div>

          <div className="left-part border-l pl-20 pr-16 py-20 font-general dark:text-white">
            <form
              onSubmit={createGroup}
              action=""
              className="flex flex-col items-start"
            >
              <h2 className="font-[500] text-xl mb-3 dark:text-white">
                Create A new group
              </h2>
              <div className="group-filed flex flex-col w-[80%]">
                <input
                  type="text"
                  name="GroupName"
                  id=""
                  placeholder="group name"
                  className="h-[3rem] rounded-t-lg hover:ring-violet-600 dark:bg-black dark:ring-[#EBFF00] dark:border-[#EBFF00] dark:placeholder:text-white"
                />

                <button
                  type="text"
                  name=""
                  id=""
                  placeholder="group name"
                  className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600 dark:bg-[#EBFF00] font-[500] dark:text-black dark:border-[#EBFF00]"
                >
                  Create group
                </button>
              </div>
            </form>

            <p className="text-left text-violet-600 mt-4 w-[90%] font-[500] dark:text-[#EBFF00]">
              ** Enter enter a valid group name for ex:(A)
            </p>
          </div>
        </div>

        {/* create group */}
        <div className="create-group-main font-general border-b grid grid-cols-3">
          <div className="left-part border-r pl-40 py-20 dark:text-white">
            <form
              onSubmit={assignLeader}
              action=""
              className="flex flex-col items-start"
            >
              <h2 className="font-[500] text-xl mb-3 dark:text-white">
                Assign a group leader
              </h2>
              <div className="group-filed flex flex-col w-[80%]">
                <select
                  name="selectedGroup"
                  id="countries"
                  class="h-[3rem] rounded-t-lg border-b-0 bg-gray-50 border text-gray-900 text-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#EBFF00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#EBFF00] dark:focus:border-[#EBFF00]"
                >
                  <option selected>Select group</option>
                  {group.map((data) => (
                    <option value={data.groupName}>{data.groupName}</option>
                  ))}
                </select>
                <input
                  type="number"
                  name="roll"
                  id=""
                  placeholder="group leader roll"
                  className="h-[3rem] border-b-0 hover:ring-violet-600 dark:bg-black dark:ring-[#EBFF00] dark:border-[#EBFF00] dark:placeholder:text-white"
                />
                <button
                  type="text"
                  name=""
                  id=""
                  placeholder="group name"
                  className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600 dark:bg-[#EBFF00] font-[500] dark:text-black dark:border-[#EBFF00]"
                >
                  Assign leader
                </button>
              </div>
            </form>

            <p className="text-left text-violet-600 mt-4 w-[90%] font-[500] dark:text-[#EBFF00]">
              ** Select group group and assign group leader.
            </p>
          </div>
          {/* right side */}
          <div className="middle-part pl-20 pr-20 py-20  flex flex-col justify-start border-r">
            <h1 className="mb-4 text-sm font-general font-[500] text-left rounded-full px-3 py-[3px] max-w-max border border-violet-600 text-violet-600 dark:border-[#EBFF00]  dark:text-[#EBFF00]">
              All recently crated group names
            </h1>
            {/* <h1 className="font-general font-[500] text-xl">No group found</h1> */}
            {group.map((data) => (
              <h1 className="font-general font-[500] text-xl text-left border-b py-2 dark:text-white flex justify-between">
                {data?.groupName}
                {data?.Leader === 0 ? (
                  <span className="text-red-600 dark:text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </span>
                ) : (
                  <p>{data?.Leader}</p>
                )}
              </h1>
            ))}
          </div>
          <div className="right-part flex flex-col items-start justify-start pl-20 pr-16 py-20 dark:text-white">
            <form
              onSubmit={updateGroupLeader}
              action=""
              className="flex flex-col items-start w-full"
            >
              <h2 className="font-[500] text-xl mb-3 dark:text-white">
                Update group leader
              </h2>
              <div className="group-filed flex flex-col w-[80%]">
                <select
                  name="group"
                  id="countries"
                  class="h-[3rem] rounded-t-lg border-b-0 bg-gray-50 border text-gray-900 text-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#EBFF00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#EBFF00] dark:focus:border-[#EBFF00]"
                >
                  <option selected>Select group</option>
                  {group.map((data) => (
                    <option value={data.groupName}>{data.groupName}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="previous"
                  id=""
                  placeholder="Previous group leader roll"
                  className="h-[3rem] hover:ring-violet-600 dark:hover:ring-[#EBFF00] dark:bg-black dark:border-[#EBFF00] dark:placeholder:text-white"
                />
                <input
                  type="text"
                  name="new"
                  id=""
                  placeholder="New group leader roll"
                  className="h-[3rem] border-y-0 hover:ring-violet-600 dark:hover:ring-[#EBFF00] dark:bg-black dark:border-[#EBFF00] dark:placeholder:text-white"
                />
                <button
                  type="text"
                  name=""
                  id=""
                  className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600 dark:hover:ring-[#EBFF00] dark:bg-[#EBFF00] dark:text-black font-[500] dark:border-[#EBFF00] "
                >
                  Update
                </button>
              </div>
            </form>

            <p className="text-left text-violet-600 mt-4 w-[90%] font-[500] dark:text-[#EBFF00]">
              ** Enter previous group leader roll and new group leader roll to
              update group.
            </p>
          </div>
        </div>

        <div className="group-details sm:px-20   xl:px-40 py-20">
          {/* select group */}
          <div className="select-group-details w-[15rem] text-left font-general">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select group
            </label>
            <select
              onChange={groupSelect}
              name="groups"
              id="countries"
              class="bg-gray-50 border border-black text-gray-900 text-sm rounded-sm  focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#EBFF00] dark:focus:border-[#EBFF00]"
            >
              <option selected>Select group</option>
              {group.map((data) => (
                <option value={data.groupName}>{data.groupName}</option>
              ))}
            </select>
          </div>

          <div className="group-table-list mt-10 font-general">
            <div class="relative overflow-x-auto">
              {groupData.length === 0 ? (
                <h1 className="dark:text-white">No data found</h1>
              ) : (
                <table class="border border-black w-full text-sm text-left text-black dark:text-white dark:border-white">
                  <thead class="text-xs text-black uppercase border-b border-black dark:text-white dark:border-b-white">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        group name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Student name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Roll
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Task status
                      </th>
                      <th scope="col" class="px-2 py-3">
                        %
                      </th>
                      <th scope="col" class="px-1 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupData?.map((data) => (
                      <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {data?.groupName}
                        </th>
                        <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                          {data?.name}
                        </td>
                        <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                          {data?.roll}
                        </td>
                        <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                          {data?.status}
                        </td>
                        <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                          <div class=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                            <div
                              className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                              style={{
                                width: `${
                                  data?.submition > 100 ? 100 : data?.submition
                                }%`,
                              }}
                            ></div>
                          </div>
                        </td>
                        <td class=" border-black px-2 py-4 text-violet-500 font-[500] dark:text-[#ebff00] dark:border-l-white">
                          {data?.submition > 100 ? 100 : data?.submition}%
                        </td>
                        <td class="flex justify-center border-l border-black px-2 py-4 text-violet-500 font-[500] dark:text-[#ebff00] dark:border-l-white">
                          <Link to={`/AdminAllANS/${data?.roll}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                              />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* delete data section start here */}
        <div className="data-delete-section w-full border-t px-40 py-40">
          <p className="text-black text-[18px] font-[500] dark:text-[#EBFF00]">
            Danger zone please take stapes at your own risk. No data will be
            recovered after deleting.<br></br>If you want to delete all data
            please run this following command and hit on delete button.
            <br />
          </p>

          <p className="text-gray-600 mt-6 text-[18px] font-[500] dark:text-[#EBFF00]">
            <br />
            <span className="font-mono text-red-600 pt-10">delete all</span>
          </p>

          {/* delete all dta button here */}
          <form
            onSubmit={student_roll_search}
            action=""
            className="flex flex-col items-center mt-10 w-full font-general"
          >
            <div className="search-main flex items-center justify-center gap-2 rounded-sm w-full">
              <input
                type="test"
                name="delete_command"
                id=""
                className="font-mono pl-2 h-[2rem] border border-red-600   focus:ring-red-600 dark:focus:ring-[#EBFF00] dark:border-[#EBFF00] dark:bg-black dark:text-red-600"
              />
              <button className="bg-red-200 h-[2rem] px-2 text-red-600 border border-red-500 rounded-sm dark:text-[#EBFF00] dark:border-[#EBFF00] dark:bg-[#eaff0069]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
