export default function Tab(){

    return(
        <div className="border-b border-gray-200 dark:border-gray-700 tabdiv">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2 tabwidth">
                    <a href="#"
                       className="inline-flex py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                       aria-current="page">
                        <svg className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                      Take Service
                    </a>

                </li>
                <li className="mr-2">
                    <a href="/provider"
                       className="inline-flex py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 group">
                        <svg
                            className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                        </svg>
                    Provide service
                    </a>
                </li>







            </ul>


            <div className="mt-10 sm:mt-0 formdiv">
                <div className="md:grid md:grid-cols-2 md:gap-1">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">

                                        <div className="col-span-6 sm:col-span-4">
                                            <input
                                                type="text"
                                                name="pick-address"
                                                id="pick-address"
                                                autoComplete="email"
                                                placeholder="Enter Pickup Location"
                                                className=" email mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <input
                                                type="text"
                                                name="destination-address"
                                                id="destination-address"
                                                autoComplete="email"
                                                placeholder="Enter Pickup Location"
                                                className=" email mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="px-4 py-3 text-left sm:px-6">
                                   <a href="/login"> <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                       Request Service
                                    </button>
                                   </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}