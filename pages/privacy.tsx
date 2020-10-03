import Head from 'next/head'
import {NavBar, NavBarPage} from "../components/NavBar";
import styles from './privacy.module.css';
import {MaxWidthContainer} from "../components/MaxWidthContainer";
import React from "react";

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy BitLink - Open Source Video Conferencing</title>
            </Head>
            <NavBar page={NavBarPage.PRIVACY}/>
            <div className={styles.top}>
                <div className={styles.content}>
                    <h1>Privacy</h1>
                </div>
            </div>
            <div className={styles.bottom}>
                <MaxWidthContainer>
                    <h1>Privacy Policy</h1>
                    <p>Your privacy is extremely important to us. We want to be transparent about what information BitLink
                        ("BitLink", "we", "our", or "us") collects and how we use that information.</p>
                    <h3>What We Collect</h3>
                    <h4>Information You Provide</h4>
                    <ul>
                        <li>When you create a room, we collect the room name and your name. Your name and the room name you provide
                            are stored in our servers until you leave the room or the room ends. Once this occurs, your name and the
                            room name are permanently deleted.
                        </li>
                        <li>When you join a room, we collect the name you provide. The name you provide
                            is stored in our servers until you leave the room or the room ends. Once this occurs, your name is
                            permanently deleted.
                        </li>
                        <li>When you send a message, we collect the content of the message. Once the room ends, the data is
                            permanently deleted.
                        </li>
                    </ul>
                    <h4>Information Automatically Collected</h4>
                    <ul>
                        <li>We collect logging and usage information. This includes IP Address, Cookies, user-agent string, browser
                            type, operating system, and device information.
                        </li>
                        <li>In order to understand how users are using our service and improve our service, we collect usage
                            information and share it with our partners and affiliates. We never share names, room names, chat logs,
                            video, or audio with our partners and affiliates.
                        </li>
                    </ul>
                    <h3>How We Use Information</h3>
                    <ul>
                        <li>
                            We use room names to help users identify the room they are in.
                        </li>
                        <li>
                            We use user names to help users identify people within their room.
                        </li>
                        <li>
                            We use audio, video, and chat information to provide user-to-user communications.
                        </li>
                        <li>
                            We use usage data and logging information to improve our service.
                        </li>
                    </ul>
                </MaxWidthContainer>
            </div>
        </>
    )
}
