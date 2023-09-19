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
            className="flex flex-col items-center mt-10 w-full font-nr"
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