import React from "react";
import Image from "next/image";
import { BiHeart, BiMessage, BiUpload } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";

const FeedCard: React.FC = () => {

    interface PostButton {
        icon: React.ReactNode
    }
    const PostButtonItems: PostButton[] = [
        {
            icon: <BiMessage/>
        },
        {
            icon: <AiOutlineRetweet/>
        },
        {
            icon: <BiHeart/>
        },
        {
            icon: <BiUpload/>
        },
        
    ]
    return (
        <div className="border-gray-400 border-t-[0.1px]">
            <div className="grid grid-cols-12 p-4">
                <div className="col-span-2">
                    <Image className="rounded-full" height={50} width={50}
                        src="https://yt3.googleusercontent.com/c8p88q6z6Ba5q3053k7rcNV_7fgardb5Z0vMnisGoyS7ht1PN_sF5xhu4G1j_ZrBdK8W_Usj=s900-c-k-c0x00ffffff-no-rj"
                        alt="profile"
                    />
                </div>
                <div className="col-span-10">
                    <div className="flex flex-col gap-2 items-start justify-start">
                        <span className="font-semibold">Monkey.D Luffy</span>
                        <p>
                            Kaizukoni orewa naru
                        </p>
                    </div>
                </div>

            </div>
            <ul className="flex justify-evenly items-center ">
                {PostButtonItems.map(({icon}, index) => (
                    <li key = {index} className="hover:bg-gray-800 rounded-full p-1 w-fit h-fit">
                        {icon}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeedCard