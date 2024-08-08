"use client";

import React from "react";
import Link from "next/link";

const Blocked = () => {
	return (
		<main className="relative text-base-content w-full flex flex-col justify-center gap-8 items-center p-10">
			<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={72} height={72} color={"red"} fill={"none"}>
    <path d="M12.3107 3H11.6893C9.25367 3 8.03584 3 7.03946 3.55252C6.04307 4.10503 5.45164 5.10831 4.26878 7.11486L3.67928 8.11486C2.55976 10.0139 2 10.9635 2 12C2 13.0365 2.55976 13.9861 3.67928 15.8851L4.26878 16.8851C5.45164 18.8917 6.04307 19.895 7.03946 20.4475C8.03584 21 9.25367 21 11.6893 21H12.3107C14.7463 21 15.9652 21 16.9605 20.4475C17.9569 19.895 18.5484 18.8917 19.7312 16.8851L20.3207 15.8851C21.4402 13.9861 22 13.0365 22 12C22 10.9635 21.4402 10.0139 20.3207 8.11485L19.7312 7.11486C18.5484 5.10831 17.9569 4.10503 16.9605 3.55252C15.9652 3 14.7463 3 12.3107 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11.992 16H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9922 13L11.9922 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
			</div>
			<h1 className="text-xl md:text-2xl font-medium">
				Spam, Access Blocked
			</h1>
			<p>Try again in 1 minute</p>

			<div>
				<Link className="link" href="/sign-in">
					Login
				</Link>{" "}
				or{" "}
				<Link className="link" href="/">
					Home
				</Link>
			</div>
		</main>
	);
};

export default Blocked;