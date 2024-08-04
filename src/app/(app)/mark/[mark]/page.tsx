'use client'

import DeleteMark from "@/components/DeleteMark";
import apiClient from "@/lib/api";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import useSWR from "swr";

const Mark = () => {
    const param = useParams()
    const { data, mutate } = useSWR(["/get-mark", param], ([url, param]) => apiClient.post(url, param), {
        revalidateOnFocus: false
    })
    // console.log(typeof(data?.data));
    const sorted = data?.data?.site.sort((a: any, b: any) => a.rank - b.rank);
    // console.log(sorted);
    const deleteSite = async (siteData: object) => {

        try {
            const response = await axios.post("/api/delete-site", siteData)
            toast(response.data.message)
        } catch (error) {
            console.log(error);
        }
        finally {
            mutate()
        }
    }
    const moveSite = async (siteData: object) => {
        // console.log(siteData);

        try {
            const response = await axios.post("/api/move-site", siteData)
        } catch (error) {
            console.log(error);
        }
        finally {
            mutate()
        }
    }
    const router = useRouter()
    return (
        <div>
            <div className='bg-base-200 lg:absolute lg:w-5/6 right-0 p-5 text-base-content min-h-screen'>
                <div className='flex flex-col gap-8'>
                    {param?.mark ? (
                        <div>
                            <div className="flex mb-10 items-center justify-between text-2xl gap-3">
                                <div className="flex font-semibold text-2xl items-center gap-3">
                                    <span className="items-center w-32 lg:w-72 overflow-hidden">{param?.mark}</span>
                                </div>
                                <div className="flex gap-3">
                                    <div className="btn btn-active w-20" onClick={() => router.push(`/mark/${param?.mark}/add-site`)}>Add</div>
                                    <DeleteMark />
                                </div>
                            </div>
                            <div className="flex gap-5 flex-wrap justify-center">
                                {sorted?.map((i: any) => (
                                    <div key={i?._id} className="rounded-md border w-80 flex justify-between" >
                                        <div className="flex items-center gap-1 justify-center w-11/12  flex-row">
                                            <a href={i?.home} target="_blank">
                                                <Image
                                                    src={i?.icon ? (`${i?.icon}`) : (i?.home.slice(0, 8) === 'https://' ? (`${i?.home}/favicon.ico`) : ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9gUXKwt2KErC_jWWlkZkGabxpeGchT-fyw&s'))}
                                                    height={70}
                                                    width={70}
                                                    className="rounded-lg"
                                                    quality={100}
                                                    alt="Icon"
                                                />
                                            </a>
                                            <div className="p-4">
                                                <div className="gap-10 mt-3 items-center flex text-balance">
                                                    <a href={i?.page || i?.home} target="_blank" className=" flex hover:underline cursor-pointer">
                                                        <span className="max-w-20 overflow-hidden">{i?.title}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"inherit"} fill={"none"}>
                                                            <path d="M16.5 7.5L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                            <path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <a href={i?.home} target="_blank" className="mt-4 hover:underline cursor-pointer mb-2 mr-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold text-base-content">
                                                    #Home
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn p-0 btn-ghost">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"inherit"} fill={"none"}>
                                                        <path d="M11.992 12H12.001" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.9842 18H11.9932" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.9998 6H12.0088" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-32 lg:w-48 p-2 shadow">
                                                    <li className="btn flex" onClick={() => router.push(`/mark/${i?.title}/edit-site/?home=${i?.home ?? ''}&page=${i?.page ?? ''}&icon=${i?.icon ?? ''}&mark=${param?.mark}`)}>
                                                        Edit
                                                    </li>
                                                    {i !== sorted[sorted.length - 1] ? (
                                                        <div>
                                                            <div className="divider my-0"></div>
                                                            <li onClick={() => moveSite({ markTitle: param?.mark, id: i?._id, move: 'forward', next: sorted[sorted.findIndex((element: any) => element?._id?.toString() === i?._id) + 1]?.title })} className="btn w-full">
                                                                move -&gt;
                                                            </li>
                                                        </div>
                                                    ) : (null)}
                                                    {i !== sorted[0] ? (
                                                        <div>
                                                            <div className="divider my-0"></div>
                                                            <li onClick={() => moveSite({ markTitle: param?.mark, id: i?._id, move: 'backward', prev: sorted[sorted.findIndex((element: any) => element?._id?.toString() === i?._id) - 1]?.title })} className="btn w-full">
                                                                &lt;- move
                                                            </li>
                                                        </div>
                                                    ) : (null)}
                                                    <div className="divider my-0"></div>
                                                    <li onClick={() => deleteSite({ markTitle: param?.mark, id: i?._id })} className="text-red-600 btn font-semibold">Delete</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>)
                        : (<div>Now go ahead and follow next! </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Mark