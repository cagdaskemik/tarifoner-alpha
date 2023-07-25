/* eslint-disable @next/next/no-head-element */
// add bootstrap css 
//import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// add bootstrap css 
//"use client"
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import './globals.css';
import Head from "next/head";
import { useState } from 'react';
import NavigationBar from './(components)/NavigationBar';


export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (
		<html className="bgImageContainer">
			<body>
				<div>
					<div className="bgImage"></div>
					<div className="contentContainer">
						<nav>
							<NavigationBar />
						</nav>
						<div className="content">{children}</div>
						<div className="footerCredit">
							<a href="https://www.freepik.com/free-vector/vegetables-seamless-pattern-pumpkin-beet-potatoes-peppers_10700190.htm#query=food%20seamless&position=26&from_view=search&track=ais">
								Image by macrovector
							</a>
							on Freepik
						</div>
					</div>
				</div>
			</body>
		</html>

		// <html>
		// 	<Head>
		// 		<title>MAKEMA RECIEP</title>
		// 	</Head>
		// 	<body>
		// 		<nav>
		// 			<NavigationBar />
		// 		</nav>
		// 		<div className="content">{children}</div>
		// 		<div className="footerCredit">
		// 			<a href="https://www.freepik.com/free-vector/vegetables-seamless-pattern-pumpkin-beet-potatoes-peppers_10700190.htm#query=food%20seamless&position=26&from_view=search&track=ais">
		// 				Image by macrovector
		// 			</a>
		// 			on Freepik
		// 		</div>
		// 	</body>
		// </html>

	);
}
