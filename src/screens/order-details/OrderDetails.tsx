import React from 'react'

function OrderDetails() {
    return (
        <div className="p-3 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className='w-full border-[1px] border-headingTxt rounded-md p-3'>
                    <div className='flex justify-between mb-5'>
                        <p className='text-lg font-medium'>CUSTOMER & ORDER</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center justify-start'>
                            <p className='font-medium'>Name</p>
                            <p className='ms-[100px]'>Abhi Agarwal</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <p className='font-medium'>Email</p>
                            <p className='ms-[104px] break-all'>abhiagarwal@gmail.com</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <p className='font-medium'>Phone</p>
                            <p className='ms-[94px]'>+91 9898989898</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <p className='font-medium'>Payment Mode</p>
                            <p className='ms-[34px]'>Google Pay</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <p className='font-medium'>Delivery Method</p>
                            <p className='ms-[24px]'>Delhivery</p>
                        </div>
                    </div>
                </div>
                <div className='w-full border-[1px] border-headingTxt rounded-md p-3'>
                    <div className='flex justify-between mb-5'>
                        <p className='text-lg font-medium'>SHIPPING ADDRESS</p>
                    </div>
                    <p>House no.9898, Street no.67, Sheetla Colony, Near Global Hospital, Gurgaon Haryana</p>
                </div>
                <div className='w-full border-[1px] border-headingTxt rounded-md p-3'>
                    <div className='flex justify-between mb-5'>
                        <p className='text-lg font-medium'>BILLING ADDRESS</p>
                    </div>
                    <p>House no.9898, Street no.67, Sheetla Colony, Near Global Hospital, Gurgaon Haryana</p>
                </div>
                <div className='col-span-3 w-full border-[1px] border-headingTxt rounded-md overflow-hidden'>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</th>
                                                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">New York No. 1 Lake Park</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Jim Green</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">27</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">London No. 1 Lake Park</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Joe Black</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sidney No. 1 Lake Park</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-10 border-[1px] border-headingTxt rounded-md p-3'>

                </div>
            </div>
        </div>
    )
}

export default OrderDetails;
