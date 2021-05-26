import React from 'react';
import './header.css';

// This component returns the two SVGs that make up the header

export default function Header() {
  return (
    <div className="header" id="t">
      <svg
        width="76"
        height="10"
        viewBox="0 0 76 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="Title"
      >
        <path
          d="M5.05 9.21c-.16 0-.34-.09-.55-.26-.2-.17-.42-.4-.65-.68a13.74 13.74 0 01-1.27-1.94c-.2-.34-.36-.65-.49-.92a130.44 130.44 0 00-.98 3.47c-.2 0-.38-.05-.55-.16-.17-.1-.25-.25-.25-.42 0-.07.02-.16.05-.26A106.68 106.68 0 012.3 2.61l.6-1.4a3.51 3.51 0 00-1.17.44c-.12.07-.2.1-.25.1a.34.34 0 01-.15-.06c-.07-.05-.13-.1-.18-.16-.05-.07-.07-.12-.07-.17l.65-.24A6.51 6.51 0 013.49.8a4.16 4.16 0 011.82.44c.27.15.5.35.66.6.17.25.25.54.25.89 0 .38-.1.7-.3.96-.2.25-.45.46-.76.62-.3.16-.64.28-.99.37a7.26 7.26 0 01-1.74.23l.84 1.31a10.05 10.05 0 002.39 2.55.47.47 0 01-.25.32.72.72 0 01-.36.12zm-2.73-4.6a6.1 6.1 0 001.1-.18c.37-.1.7-.22.99-.39.3-.17.54-.37.71-.62.18-.25.27-.55.27-.89 0-.35-.09-.62-.26-.81-.17-.2-.4-.34-.67-.43a3.06 3.06 0 00-.86-.14c-.23.45-.45.97-.66 1.58-.21.6-.42 1.23-.62 1.88zm5.6-.82a.7.7 0 01-.35-.09.34.34 0 01-.15-.3c0-.16.08-.3.26-.41a.97.97 0 01.54-.17c.12 0 .22.03.3.08.08.05.13.15.13.29 0 .14-.08.28-.23.41a.77.77 0 01-.5.19zM6.74 8.3c-.3 0-.52-.09-.66-.26a.94.94 0 01-.22-.63 5.96 5.96 0 01.64-2.04c.12-.23.26-.41.4-.55.15-.15.3-.22.45-.22a.3.3 0 01.2.08c.07.05.1.12.1.21s-.06.22-.16.39l-.36.6c-.14.23-.26.46-.36.71-.1.24-.15.47-.15.69 0 .21.03.36.1.43.09.07.2.1.35.1.22 0 .47-.11.74-.34.26-.23.54-.62.83-1.19l.15.16a3.62 3.62 0 01-.9 1.37 1.7 1.7 0 01-1.15.49zm2.8.21c-.32 0-.6-.07-.8-.21-.2-.13-.34-.3-.43-.51a1.71 1.71 0 01-.13-.65c0-.2.03-.34.08-.45.05-.1.12-.18.2-.23.08-.05.15-.1.22-.12a.44.44 0 00.16-.09c.17-.17.34-.37.5-.6.19-.23.34-.49.47-.77v-.1c0-.27.04-.45.13-.56.1-.11.2-.17.32-.17.08 0 .14.02.17.06.04.04.06.09.07.14a.4.4 0 01-.03.14.95.95 0 00-.02.22c0 .2.05.43.14.69.1.25.2.52.29.81a2.65 2.65 0 01.1 1.29c.22-.05.42-.17.62-.34.2-.18.39-.44.57-.79l.12.09c-.13.38-.31.69-.55.92-.24.23-.52.37-.84.42-.1.27-.28.48-.53.61-.24.13-.51.2-.82.2zm.66-1.13l.02-.16v-.15c0-.3-.04-.6-.11-.89l-.22-.9-.42.67c-.16.24-.31.43-.45.58.1.18.26.35.47.51.2.16.44.27.7.34zm-.72.69a.72.72 0 00.64-.39 2.2 2.2 0 01-1.25-.79c-.1.02-.14.11-.14.27 0 .22.06.43.19.62.13.2.31.29.56.29zm4.17-5.78c-.08-.05-.15-.1-.23-.18-.07-.07-.1-.15-.1-.23 0-.1.04-.22.14-.34l.32-.38c.12-.13.2-.26.23-.38.1 0 .18.04.26.11a.3.3 0 01.12.24c0 .1-.04.21-.14.35a4.9 4.9 0 01-.3.41 6.2 6.2 0 00-.3.4zm4.8 6.58c-.38 0-.75-.07-1.1-.2a1.98 1.98 0 01-.86-.61 1.57 1.57 0 01-.33-1.02c0-.36.08-.64.24-.84.16-.2.36-.35.6-.43.24-.08.48-.12.7-.12-.21.23-.37.46-.49.7-.1.24-.16.47-.16.69 0 .23.06.44.17.64.12.2.3.35.53.47.24.13.53.19.87.19.3 0 .6-.05.87-.15.29-.1.52-.25.7-.45.19-.2.28-.45.28-.75 0-.27-.08-.5-.24-.7-.15-.2-.35-.38-.6-.53a8.8 8.8 0 00-.78-.45c-.27-.15-.53-.3-.78-.47a2.42 2.42 0 01-.6-.58 1.35 1.35 0 01-.24-.79c0-.27.07-.56.2-.87.14-.31.34-.6.6-.88A2.9 2.9 0 0120.13.8c.46 0 .79.1.97.29.19.2.28.45.28.76 0 .25-.04.51-.13.79a6.25 6.25 0 01-.67 1.45c-.29-.06-.44-.23-.44-.51 0-.14.03-.3.08-.47a14.1 14.1 0 01.4-1.08c.06-.18.1-.34.1-.47a.36.36 0 00-.12-.28c-.06-.07-.2-.1-.42-.1-.32 0-.61.07-.88.21a2.62 2.62 0 00-1.15 1.21c-.1.23-.16.45-.16.64 0 .24.08.45.23.62.16.17.35.32.6.46l.76.42c.28.14.53.3.77.47.25.17.45.38.6.62.16.24.23.53.23.88s-.08.65-.24.92c-.15.27-.36.49-.63.67-.26.19-.56.33-.89.42-.32.1-.64.15-.98.15zm6.26-.49c-.23 0-.38-.1-.46-.3a2.3 2.3 0 01-.12-1.03l.02-.35c-.14.25-.3.5-.46.75-.17.25-.35.45-.53.61a.9.9 0 01-.6.24.67.67 0 01-.55-.3c-.15-.2-.22-.45-.22-.74 0-.2.03-.42.09-.67a4.17 4.17 0 01.54-1.34c.1-.16.2-.24.28-.24.04 0 .12.03.24.08s.19.12.22.21a3.98 3.98 0 00-.54 1.2 2.4 2.4 0 00-.1.89c.01.1.04.18.09.26.04.08.11.12.2.12.15 0 .3-.09.47-.27.16-.18.33-.4.5-.68.16-.27.32-.55.47-.84.06-.29.1-.5.15-.62.04-.13.08-.2.12-.24.04-.03.1-.05.16-.05.26 0 .4.1.4.29a.84.84 0 01-.05.18 8.22 8.22 0 00-.19 2.19c.02.09.07.13.15.13.12 0 .27-.1.45-.29a7.82 7.82 0 001.02-1.62c0-.35.02-.61.07-.79.05-.18.12-.3.2-.37a.43.43 0 01.28-.11c.16 0 .28.05.34.16.06.1.1.2.1.27s-.02.13-.05.19c-.04.05-.06.1-.08.15a1.97 1.97 0 00-.12 1.39c.05.16.17.24.36.24.12 0 .24-.05.36-.16.12-.1.26-.3.4-.6l.2.15c-.15.35-.32.59-.5.72a.97.97 0 01-.54.19.75.75 0 01-.56-.24 1.69 1.69 0 01-.36-.59c-.17.29-.36.57-.56.86-.2.28-.41.51-.63.69-.22.19-.44.28-.66.28zm7.98.11c-.41 0-.72-.11-.94-.33a1.24 1.24 0 01-.38-.78c-.3.33-.62.6-.98.78-.37.19-.74.28-1.11.28-.44 0-.77-.12-1-.35a1.15 1.15 0 01-.34-.85c0-.3.07-.6.22-.93a3.87 3.87 0 011.45-1.63c.3-.19.62-.28.94-.28.17 0 .33.04.48.13.15.09.23.26.23.53 0 .25-.08.48-.22.7-.15.21-.35.4-.6.57a3.84 3.84 0 01-1.71.62l-.01.11v.14c0 .12.02.24.06.37.04.12.1.22.22.31.1.09.28.13.5.13.35 0 .7-.11 1.03-.34.34-.23.63-.52.89-.87.06-.27.16-.54.32-.81a3.04 3.04 0 011.29-1.26c.26-.13.53-.2.8-.2.19 0 .35.04.5.13.15.09.23.27.23.54 0 .33-.12.62-.35.87-.23.25-.53.46-.9.62-.35.15-.74.25-1.14.3l-.02.11v.13c0 .12.01.24.05.37s.1.24.22.33c.1.09.26.13.48.13.28 0 .57-.08.86-.25a3.9 3.9 0 001.43-1.53l.18.14c-.18.4-.42.76-.7 1.07-.28.3-.6.55-.93.73-.34.18-.7.27-1.05.27zm-3.84-1.86a4.86 4.86 0 001.19-.64c.19-.15.35-.3.47-.46a.86.86 0 00.18-.51c0-.05-.02-.1-.04-.12-.02-.03-.07-.05-.14-.05-.2 0-.4.09-.62.27a3.58 3.58 0 00-1.04 1.51zm3.43 0l.55-.22c.2-.1.38-.2.56-.32.17-.12.31-.25.43-.4a.82.82 0 00.17-.5c0-.14-.07-.21-.2-.21a.94.94 0 00-.57.24 3.18 3.18 0 00-.94 1.41zm3.55 1.83a.98.98 0 01-.7-.26c-.19-.17-.28-.44-.28-.79 0-.27.05-.61.15-1.02.1-.4.24-.83.4-1.26a.99.99 0 00-.17-.03.95.95 0 01-.18-.06v-.31l.26.03.22.02a14.26 14.26 0 01.94-1.91c.17-.26.33-.46.47-.61.15-.15.28-.23.4-.23.06 0 .12.03.18.08s.1.12.1.21c0 .13-.08.32-.22.57-.13.25-.3.54-.5.87-.2.33-.4.68-.58 1.05h.31l.8-.01.72-.06v.33a39.97 39.97 0 01-1.89.12h-.12c-.14.33-.26.66-.37 1.01-.1.34-.15.67-.15 1 0 .27.05.47.13.58.09.11.23.17.41.17.34 0 .68-.15 1.02-.45.36-.3.66-.72.92-1.24l.14.1c-.17.4-.39.75-.65 1.07a3.1 3.1 0 01-.83.75c-.3.19-.6.28-.93.28zm3.14.05c-.33 0-.6-.07-.8-.21-.2-.13-.35-.3-.44-.51a1.71 1.71 0 01-.13-.65c0-.2.03-.34.08-.45.06-.1.12-.18.2-.23.08-.05.16-.1.22-.12a.44.44 0 00.16-.09 7 7 0 00.51-.6c.18-.23.34-.49.46-.77v-.1c0-.27.05-.45.13-.56.1-.11.2-.17.32-.17.08 0 .14.02.17.06.04.04.07.09.07.14a.4.4 0 01-.03.14.95.95 0 00-.02.22c0 .2.05.43.14.69l.3.81a2.65 2.65 0 01.1 1.29c.2-.05.41-.17.61-.34.2-.18.4-.44.57-.79l.12.09c-.12.38-.3.69-.55.92-.24.23-.52.37-.84.42-.1.27-.28.48-.53.61-.24.13-.51.2-.82.2zm.65-1.13c.02-.05.02-.1.02-.16l.01-.15c0-.3-.04-.6-.12-.89l-.22-.9-.42.67c-.16.24-.3.43-.45.58.1.18.27.35.47.51.2.16.45.27.71.34zm-.72.69a.72.72 0 00.64-.39 2.2 2.2 0 01-1.25-.79c-.1.02-.14.11-.14.27 0 .22.07.43.2.62.12.2.3.29.55.29zm7.32.8c-.43 0-.8-.09-1.13-.26a1.73 1.73 0 01-1.01-1.6c0-.4.1-.78.33-1.15a2.98 2.98 0 012.22-1.45 2.36 2.36 0 01-.54-.71 1.87 1.87 0 01-.18-.79 2.13 2.13 0 012.18-2.1c.4 0 .7.1.9.29.22.19.33.46.33.82a2.25 2.25 0 01-.45 1.35c-.13.15-.26.23-.38.23a.4.4 0 01-.27-.12 1.54 1.54 0 01-.21-.29c.24-.2.45-.41.6-.63.17-.22.26-.45.26-.68a.63.63 0 00-.16-.45c-.11-.12-.28-.18-.51-.18-.3 0-.56.09-.76.26-.21.17-.37.4-.47.68-.11.27-.16.57-.16.9 0 .15.01.32.04.51s.1.38.2.57c.11.19.27.37.49.54-.48.07-.9.24-1.25.5a2.8 2.8 0 00-.82.89 1.76 1.76 0 00-.17 1.63c.08.21.22.4.42.54.19.15.44.22.76.22.36 0 .7-.08 1.03-.25a3.83 3.83 0 001.89-2.72 6.4 6.4 0 00-1.36.2c0-.34.12-.57.34-.68.22-.11.48-.17.79-.17.21 0 .4.01.58.04l.53.09c.18.03.38.04.6.04-.11.22-.2.35-.3.4a.53.53 0 01-.23.06l-.31.01h-.25a4.25 4.25 0 01-2.29 3.18c-.41.19-.84.28-1.28.28zm9.36 0c-.36 0-.62-.07-.76-.22a.78.78 0 01-.22-.55c0-.2.04-.42.11-.69a28.3 28.3 0 01.91-2.63 86.03 86.03 0 011.32-3.17 26.57 26.57 0 00-2.08.12l-.85.12c.04-.28.17-.5.4-.64.23-.15.54-.26.92-.32a12.98 12.98 0 012.4-.05l.94.08a25.84 25.84 0 001.54.1c-.2.19-.45.32-.76.41-.3.08-.61.13-.95.15l-.95.03c-.32.79-.61 1.6-.88 2.45a69.58 69.58 0 00-.96 3.33 6.48 6.48 0 00-.16 1.19v.11l.03.18zm3.96-.61a.88.88 0 01-.6-.2.64.64 0 01-.23-.52c0-.19.04-.39.14-.6l.28-.63c.1-.2.15-.39.15-.55a.51.51 0 00-.15-.38c-.1-.1-.22-.2-.35-.26a22.15 22.15 0 01-.94 1.87l-.15-.29a18.6 18.6 0 00.8-1.81.37.37 0 01-.1-.27c0-.17.06-.34.17-.49.1-.15.2-.23.3-.23.09 0 .14.05.18.14l.06.18-.05.18-.06.19c0 .07.06.15.17.22l.38.24c.14.1.26.21.37.35.1.14.16.32.16.53 0 .2-.05.39-.13.59l-.26.56c-.1.17-.13.32-.13.45 0 .1.02.16.07.19a.4.4 0 00.18.04c.16 0 .32-.05.5-.14a3.67 3.67 0 001.24-1.33l.24.18A3.47 3.47 0 0160.43 8c-.3.17-.6.26-.9.26zm2.94.18c-.43 0-.76-.12-1-.35a1.17 1.17 0 01-.33-.86c0-.3.07-.6.22-.93a3.8 3.8 0 011.45-1.64c.3-.18.61-.27.92-.27.17 0 .34.05.49.14.16.09.24.26.24.53 0 .25-.08.49-.22.71-.15.22-.34.42-.6.59a3.68 3.68 0 01-1.7.64l-.02.09v.32c.02.08.05.17.1.26.05.1.12.17.23.24.1.07.25.1.44.1.28 0 .56-.08.84-.23a3.67 3.67 0 001.43-1.5l.2.16a3.7 3.7 0 01-1.64 1.75c-.34.17-.7.25-1.05.25zm-.42-1.81c.17-.02.36-.08.58-.18a3.1 3.1 0 001.1-.88 1 1 0 00.19-.56c0-.07-.02-.12-.04-.15-.03-.03-.07-.04-.13-.04a.86.86 0 00-.48.17 3.44 3.44 0 00-1.22 1.64zm3.23 1.84a.82.82 0 01-.57-.22c-.17-.15-.25-.37-.25-.66 0-.23.05-.49.16-.76A3.86 3.86 0 0165.7 5.3c.24-.22.5-.4.77-.53s.54-.2.82-.2c.28 0 .53.07.73.22.2.15.3.34.3.58 0 .18-.07.31-.2.39a.6.6 0 01-.44.07l.03-.18a.88.88 0 00-.06-.55c-.06-.1-.17-.16-.34-.16-.19 0-.38.06-.57.19-.2.13-.38.3-.56.5a4.13 4.13 0 00-.8 1.38c-.08.23-.12.44-.12.63 0 .21.07.32.23.32.15 0 .32-.07.5-.22.2-.15.38-.34.57-.57a13.17 13.17 0 001-1.3c.02-.03.04-.05.08-.05a1.88 1.88 0 01.37.15c.06.05.1.1.1.18 0 .09-.05.2-.14.36-.1.15-.2.3-.3.48-.09.17-.13.33-.13.48 0 .09.02.17.07.25.04.07.12.11.23.11.16 0 .38-.12.67-.35.29-.24.59-.64.89-1.21l.19.19c-.25.55-.56.99-.92 1.33-.37.34-.74.51-1.11.51-.28 0-.48-.09-.61-.26-.14-.17-.21-.36-.22-.56v-.05a5.8 5.8 0 01-.74.76c-.22.19-.46.28-.71.28zm4.79-.01a.98.98 0 01-.71-.26c-.18-.17-.27-.44-.27-.79 0-.27.05-.61.15-1.02.1-.4.24-.83.4-1.26a.98.98 0 00-.17-.03.95.95 0 01-.18-.06v-.31l.26.03.22.02a14.26 14.26 0 01.94-1.91c.17-.26.32-.46.47-.61.15-.15.28-.23.39-.23.07 0 .13.03.19.08s.09.12.09.21c0 .13-.07.32-.21.57-.13.25-.3.54-.5.87-.2.33-.4.68-.58 1.05h.31l.79-.01.73-.06v.33a39.9 39.9 0 01-1.89.12h-.12c-.14.33-.26.66-.37 1.01-.1.34-.15.67-.15 1 0 .27.04.47.13.58.09.11.22.17.41.17.33 0 .67-.15 1.02-.45.35-.3.66-.72.92-1.24l.14.1c-.17.4-.39.75-.65 1.07a3.1 3.1 0 01-.83.75c-.3.19-.61.28-.93.28zm3.14.05c-.33 0-.6-.07-.8-.21-.2-.13-.35-.3-.44-.51a1.71 1.71 0 01-.13-.65c0-.2.03-.34.08-.45.05-.1.12-.18.2-.23.08-.05.15-.1.22-.12a.44.44 0 00.16-.09c.17-.17.34-.37.51-.6.18-.23.33-.49.46-.77v-.1c0-.27.04-.45.13-.56.1-.11.2-.17.32-.17.08 0 .14.02.17.06.04.04.06.09.07.14a.4.4 0 01-.03.14.95.95 0 00-.02.22c0 .2.05.43.14.69l.3.81a2.65 2.65 0 01.1 1.29c.2-.05.41-.17.61-.34.2-.18.4-.44.57-.79l.12.09c-.13.38-.3.69-.55.92-.24.23-.52.37-.84.42-.1.27-.28.48-.53.61-.24.13-.51.2-.82.2zm.65-1.13l.02-.16.01-.15c0-.3-.05-.6-.12-.89l-.22-.9-.42.67c-.16.24-.3.43-.45.58.1.18.26.35.47.51.2.16.44.27.71.34zm-.72.69a.72.72 0 00.64-.39 2.2 2.2 0 01-1.25-.79c-.1.02-.14.11-.14.27 0 .22.06.43.2.62.12.2.3.29.55.29z"
          fill="black"
        />
      </svg>
      <svg
        width="54"
        height="5"
        viewBox="0 0 54 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="Slogan"
      >
        <path
          d="M1.73 1.14a1.73 1.73 0 00-.16-.2L1.43.73a.41.41 0 01-.06-.17c0-.05.01-.1.05-.13a.19.19 0 01.14-.05c.01.06.05.12.11.19l.16.19c.05.06.07.12.07.17 0 .04-.01.08-.05.11a.57.57 0 01-.11.1zm-.63 0a1.73 1.73 0 00-.15-.2L.81.73A.41.41 0 01.73.56C.73.5.77.46.8.43A.19.19 0 01.93.39c.01.06.05.12.11.19l.16.19c.05.06.07.12.07.17 0 .04-.01.08-.05.11a.57.57 0 01-.11.1zm.8 3.3a10.68 10.68 0 01.51-1.97 3.77 3.77 0 00-.32.03c0-.1.04-.19.12-.25.08-.05.18-.1.31-.12a1.52 1.52 0 01.07-.21l.06-.17.1-.3A55.93 55.93 0 003 .68c0-.05-.02-.07-.07-.07a.32.32 0 00-.2.09 1.31 1.31 0 00-.32.52.8.8 0 00-.05.25v.1l.05.13c-.14 0-.24-.03-.3-.09a.34.34 0 01-.1-.24c0-.11.04-.23.1-.34a1.48 1.48 0 01.61-.54.79.79 0 01.34-.09c.11 0 .18.03.22.08.04.06.06.13.06.2l-.01.1c0 .04-.02.08-.03.11l-.36 1.2h.25a9.93 9.93 0 01.87.04A47.71 47.71 0 014.43.99 21.63 21.63 0 014.6.57a.38.38 0 01.1-.12.32.32 0 01.2-.05 13.19 13.19 0 00-.52 1.75l.2.01h.23c-.1.1-.2.17-.27.2a.8.8 0 01-.22.04 19.16 19.16 0 00-.27 1.39 3.78 3.78 0 00-.02.52l.02.13c-.17-.02-.28-.06-.35-.13-.06-.06-.09-.18-.09-.34a2.41 2.41 0 01.08-.59 6.3 6.3 0 01.28-.98 20.9 20.9 0 00-1.15.04l-.03.08a68.32 68.32 0 00-.22.71l-.27.86a.42.42 0 01-.19.27.47.47 0 01-.23.07zm3.15-.28c-.15 0-.25-.05-.3-.15a.65.65 0 01-.09-.32 1.4 1.4 0 01.19-.64.9.9 0 01.2-.23.35.35 0 01.21-.09c.03 0 .05 0 .08.02.04 0 .06.01.07.03a1.69 1.69 0 00-.3.59 1.1 1.1 0 00-.05.3c0 .07.01.13.04.17.02.04.07.06.13.06.07 0 .14-.03.23-.1a2 2 0 00.25-.25.88.88 0 01-.23-.31 1.13 1.13 0 01-.07-.43.7.7 0 01.05-.23c.04-.1.1-.17.17-.24.08-.07.19-.1.32-.1.15 0 .25.04.3.12.06.08.1.18.1.29 0 .12-.04.26-.1.41-.07.15-.15.3-.24.44a.3.3 0 00.14.02c.05 0 .11 0 .18-.03a.6.6 0 00.36-.34l.1.06a.81.81 0 01-.3.38.66.66 0 01-.6.07c-.12.13-.25.25-.4.35-.14.1-.29.15-.44.15zm.8-.77c.07-.12.14-.24.2-.38a.95.95 0 00.08-.36c0-.15-.04-.23-.14-.23-.06 0-.13.05-.2.14-.06.09-.1.2-.1.34 0 .07.02.16.04.25.03.1.07.18.11.24zm3.35.77c-.13 0-.23-.04-.3-.12a.42.42 0 01-.09-.27c0-.08.01-.16.04-.23l.07-.23a.71.71 0 00.03-.2c0-.06-.01-.1-.03-.12a.1.1 0 00-.08-.04c-.08 0-.17.06-.27.18a5.73 5.73 0 00-.65.99.65.65 0 01-.25-.07c-.03-.01-.05-.04-.05-.06a167.01 167.01 0 00.28-.81c.03-.12.05-.22.05-.3 0-.1-.04-.15-.1-.15-.08 0-.16.05-.26.13s-.2.2-.31.33a3.65 3.65 0 00-.54.94c-.03 0-.08 0-.13-.02a.53.53 0 01-.14-.06c-.04-.01-.06-.03-.06-.05 0 0 0-.05.03-.14a63.37 63.37 0 00.29-1.14c0-.04.04-.07.1-.1A.4.4 0 017 2.58c.05 0 .09.02.12.04.04.03.05.07.05.13 0 .03 0 .08-.02.14l-.05.21.3-.36c.11-.12.22-.21.34-.29a.62.62 0 01.34-.11c.12 0 .2.04.25.14a.7.7 0 01.04.48l-.06.2c.1-.14.2-.26.32-.36.13-.1.26-.15.4-.15.13 0 .22.04.27.12.05.07.08.16.08.25s-.02.18-.05.27l-.08.27a.72.72 0 00-.04.22c0 .03 0 .07.02.1.02.02.05.04.1.04.1 0 .18-.05.26-.13.09-.08.16-.19.23-.3.08-.13.14-.25.19-.36l.08.11c-.05.14-.12.28-.2.42-.1.14-.19.26-.3.35a.58.58 0 01-.4.15zm1.26.06a.67.67 0 01-.5-.17.58.58 0 01-.16-.43c0-.15.03-.3.1-.47a1.9 1.9 0 01.73-.82.9.9 0 01.46-.14c.09 0 .17.03.25.08.08.04.12.13.12.26s-.04.25-.11.35c-.08.12-.17.21-.3.3a1.84 1.84 0 01-.85.32l-.01.04v.16c.01.04.02.09.05.13a.3.3 0 00.11.13c.06.03.13.04.22.04.14 0 .28-.03.42-.11a1.83 1.83 0 00.71-.75l.1.08a1.85 1.85 0 01-.81.87c-.17.09-.35.13-.53.13zm-.2-.9a.95.95 0 00.28-.1 1.55 1.55 0 00.55-.44.5.5 0 00.1-.27c0-.04 0-.07-.02-.08l-.07-.02a.43.43 0 00-.24.08 1.72 1.72 0 00-.61.82zm3.94.84c-.13 0-.22-.04-.29-.12a.42.42 0 01-.1-.27c0-.08.02-.16.04-.23l.07-.23a.72.72 0 00.04-.2c0-.06-.01-.1-.04-.12a.1.1 0 00-.08-.04c-.07 0-.16.06-.27.18a5.73 5.73 0 00-.65.99.65.65 0 01-.24-.07c-.04-.01-.06-.04-.06-.06a167.01 167.01 0 00.28-.81c.04-.12.05-.22.05-.3 0-.1-.03-.15-.1-.15s-.16.05-.26.13-.2.2-.3.33a3.65 3.65 0 00-.54.94c-.04 0-.08 0-.14-.02a.53.53 0 01-.14-.06c-.04-.01-.06-.03-.06-.05l.04-.14a63.37 63.37 0 00.28-1.14c.01-.04.05-.07.11-.1a.4.4 0 01.17-.04c.04 0 .08.02.12.04.03.03.05.07.05.13l-.02.14-.05.21.3-.36c.1-.12.22-.21.33-.29a.62.62 0 01.34-.11c.13 0 .2.04.25.14.05.08.07.18.07.28a.7.7 0 01-.03.19l-.06.21c.1-.14.2-.26.33-.36.12-.1.25-.15.4-.15.13 0 .22.04.27.12.05.07.07.16.07.25s-.01.18-.04.27l-.09.27a.72.72 0 00-.04.22c0 .03.01.07.03.1.01.02.05.04.1.04.09 0 .17-.05.26-.13.08-.08.16-.19.23-.3l.18-.36.09.11-.21.42c-.09.14-.18.26-.3.35a.58.58 0 01-.39.15zm.97.08a.4.4 0 01-.29-.12c-.08-.07-.12-.18-.12-.33 0-.11.02-.24.08-.38a1.93 1.93 0 01.54-.76c.12-.11.25-.2.38-.27.14-.06.28-.1.41-.1a.6.6 0 01.37.12c.1.07.15.17.15.29 0 .08-.03.15-.1.19a.3.3 0 01-.22.04l.01-.1a.43.43 0 00-.03-.27c-.02-.05-.08-.08-.17-.08-.1 0-.19.03-.28.1-.1.06-.2.14-.28.25a2.07 2.07 0 00-.4.69.98.98 0 00-.06.31c0 .1.04.16.11.16.08 0 .16-.04.26-.11a6.55 6.55 0 00.78-.94l.04-.02a.94.94 0 01.18.07.1.1 0 01.05.1c0 .04-.02.1-.07.17l-.14.25a.51.51 0 00-.07.23c0 .05 0 .09.03.13.03.04.06.06.12.06.08 0 .19-.06.33-.18.15-.12.3-.32.45-.6l.1.09c-.13.27-.28.5-.47.67a.82.82 0 01-.55.25c-.14 0-.24-.04-.3-.13a.5.5 0 01-.12-.28v-.03a2.9 2.9 0 01-.37.38.54.54 0 01-.35.15zm2.28-.09a.43.43 0 01-.35-.2.43.43 0 01-.07-.25c0-.11.03-.23.08-.37a2.2 2.2 0 01.53-.79c.13-.1.26-.2.4-.27a.9.9 0 01.4-.1c.09 0 .15 0 .19.04.04.02.06.06.06.12v.05l-.06.06c0-.02-.03-.03-.07-.04a.36.36 0 00-.1-.02.58.58 0 00-.32.1c-.1.06-.19.14-.27.23a1.9 1.9 0 00-.36.65.9.9 0 00-.05.27c0 .14.05.21.16.21.09 0 .2-.05.32-.15.13-.11.25-.26.38-.46.14-.2.26-.44.36-.71a34.42 34.42 0 01.7-1.65c.09-.14.16-.26.23-.34.08-.09.14-.13.2-.13.04 0 .07.01.1.04s.04.07.04.11a.8.8 0 01-.08.27l-.21.45-.28.56a10.48 10.48 0 00-.48 1.25c-.05.2-.08.4-.08.57 0 .08 0 .14.02.17s.04.04.08.04c.1 0 .23-.06.38-.19s.28-.31.4-.55l.09.08c-.07.18-.17.34-.28.48-.11.15-.24.25-.37.33a.73.73 0 01-.38.12c-.14 0-.23-.04-.29-.13a.57.57 0 01-.08-.3 1.28 1.28 0 01.04-.33c-.15.23-.32.41-.5.56-.17.15-.33.22-.48.22zm2.7.07a.67.67 0 01-.5-.17.58.58 0 01-.17-.43c0-.15.04-.3.11-.47a1.9 1.9 0 01.73-.82.9.9 0 01.46-.14c.08 0 .16.03.24.08.08.04.12.13.12.26s-.04.25-.11.35c-.07.12-.17.21-.3.3a1.84 1.84 0 01-.85.32l-.01.04v.16l.05.13a.3.3 0 00.12.13c.05.03.12.04.22.04.14 0 .28-.03.42-.11a1.83 1.83 0 00.71-.75l.1.08a1.85 1.85 0 01-.82.87c-.17.09-.34.13-.52.13zm-.21-.9a.95.95 0 00.29-.1 1.54 1.54 0 00.55-.44.5.5 0 00.09-.27c0-.04 0-.07-.02-.08l-.06-.02a.43.43 0 00-.24.08 1.73 1.73 0 00-.61.82zm3.57 1.11c-.18 0-.3-.05-.35-.13a.45.45 0 01-.08-.27c0-.12.02-.27.06-.45a6 6 0 01.4-1.14 26.83 26.83 0 01-.6.07c0-.1.04-.18.1-.24.08-.06.17-.1.27-.13.11-.03.23-.04.36-.04A23.64 23.64 0 0124.2.77l-.07-.01h-.1c-.21 0-.37.02-.48.06a.42.42 0 00-.23.18.66.66 0 00-.06.3 1 1 0 00.1.45c-.16-.03-.27-.08-.34-.15a.42.42 0 01-.1-.29c0-.17.07-.32.2-.46.12-.13.3-.23.51-.31.22-.08.47-.12.74-.12.18 0 .36.02.53.04a3.8 3.8 0 00.74.02l.26-.06c-.16.18-.29.3-.4.36-.1.05-.19.08-.29.08-.08 0-.18 0-.3-.03A3.63 3.63 0 0024.5.8c-.06.15-.14.35-.21.58l-.24.73.47.04.47.04a.67.67 0 01-.13.13.4.4 0 01-.16.06 12.15 12.15 0 01-.74.04 14.62 14.62 0 01-.2.72c-.1.31-.17.58-.2.78-.04.2-.05.38-.05.52zm2.4-.3a.44.44 0 01-.3-.1.32.32 0 01-.11-.26c0-.1.02-.2.07-.3l.14-.32c.05-.1.07-.19.07-.27a.26.26 0 00-.07-.19.62.62 0 00-.18-.13 5.23 5.23 0 01-.47.94l-.07-.15a9.52 9.52 0 00.4-.9.18.18 0 01-.05-.14c0-.09.03-.17.08-.25.05-.07.1-.11.16-.11.04 0 .06.02.08.07l.03.09c0 .02 0 .05-.02.09l-.03.1c0 .03.03.07.08.1l.19.13c.07.04.13.1.19.17.05.07.08.16.08.26s-.03.2-.07.3l-.13.28a.52.52 0 00-.06.23c0 .04 0 .07.03.09a.2.2 0 00.09.02c.08 0 .16-.02.25-.07s.17-.11.26-.19a1.85 1.85 0 00.36-.48l.12.1a1.74 1.74 0 01-.67.76.87.87 0 01-.45.13zm1.22.03c-.15 0-.25-.05-.3-.15a.65.65 0 01-.09-.32 1.4 1.4 0 01.18-.64.9.9 0 01.2-.23.35.35 0 01.22-.09c.03 0 .05 0 .08.02.04 0 .06.01.07.03l-.16.26c-.06.1-.1.21-.14.33a1.1 1.1 0 00-.05.3c0 .07.01.13.04.17.02.04.07.06.13.06.07 0 .14-.03.23-.1a2 2 0 00.25-.25.88.88 0 01-.23-.31 1.13 1.13 0 01-.07-.43.7.7 0 01.05-.23c.04-.1.1-.17.17-.24.08-.07.19-.1.32-.1.15 0 .25.04.3.12.06.08.1.18.1.29 0 .12-.04.26-.1.41-.07.15-.15.3-.24.44a.3.3 0 00.14.02c.05 0 .11 0 .18-.03a.6.6 0 00.37-.34l.09.06a.81.81 0 01-.3.38.66.66 0 01-.6.07c-.12.13-.25.25-.4.35-.14.1-.29.15-.44.15zm.8-.77c.07-.12.14-.24.2-.38a.95.95 0 00.08-.36c0-.15-.04-.23-.14-.23-.06 0-.13.05-.2.14-.06.09-.1.2-.1.34 0 .07.02.16.04.25.03.1.07.18.11.24zm3.35.77c-.13 0-.23-.04-.3-.12a.42.42 0 01-.09-.27c0-.08.01-.16.04-.23L31 3.3a.72.72 0 00.03-.2c0-.06-.01-.1-.03-.12a.1.1 0 00-.08-.04c-.08 0-.17.06-.27.18a5.73 5.73 0 00-.65.99.65.65 0 01-.25-.07c-.03-.01-.05-.04-.05-.06a167.01 167.01 0 00.28-.81c.03-.12.05-.22.05-.3 0-.1-.04-.15-.1-.15-.08 0-.16.05-.26.13s-.2.2-.31.33a3.65 3.65 0 00-.54.94c-.03 0-.08 0-.13-.02a.53.53 0 01-.14-.06c-.04-.01-.06-.03-.06-.05 0 0 0-.05.03-.14a63.37 63.37 0 00.29-1.14c0-.04.04-.07.1-.1a.4.4 0 01.17-.04c.05 0 .09.02.12.04.04.03.05.07.05.13 0 .03 0 .08-.02.14l-.05.21.3-.36c.11-.12.22-.21.34-.29a.62.62 0 01.34-.11c.12 0 .2.04.25.14a.7.7 0 01.04.48l-.06.2c.1-.14.2-.26.32-.36.13-.1.26-.15.4-.15.13 0 .22.04.27.12.05.07.08.16.08.25s-.02.18-.05.27l-.08.27a.72.72 0 00-.04.22c0 .03 0 .07.02.1.02.02.05.04.1.04.1 0 .18-.05.26-.13.09-.08.16-.19.23-.3.08-.13.14-.25.19-.36l.08.11c-.05.14-.12.28-.2.42-.1.14-.19.26-.3.35a.58.58 0 01-.4.15zm3.15.27c-.19 0-.31-.03-.38-.1a.39.39 0 01-.11-.28c0-.1.02-.21.05-.34a14.14 14.14 0 01.8-2.17l.32-.73a13.29 13.29 0 00-1.47.11.42.42 0 01.2-.32c.11-.07.27-.13.46-.15a4.38 4.38 0 011.2-.03l.47.04a12.93 12.93 0 00.77.05.9.9 0 01-.38.2c-.15.05-.3.07-.47.08l-.48.02c-.16.39-.3.8-.44 1.22A35.1 35.1 0 0034.43 4l-.02.29v.05l.02.1zm1.53-.24c-.08 0-.13-.06-.16-.17a1.55 1.55 0 01-.05-.4c0-.15.03-.33.08-.55A6.87 6.87 0 0137 .6c.1-.11.2-.17.28-.17.07 0 .12.04.16.12.03.07.05.15.05.23 0 .1-.02.2-.06.34a2.91 2.91 0 01-.43.86c-.1.15-.2.28-.32.4s-.23.22-.36.29a2.24 2.24 0 00-.17.85v.1a2.1 2.1 0 01.38-.77c.08-.11.17-.2.28-.27a.6.6 0 01.35-.11c.12 0 .2.03.27.08.06.05.1.11.13.19.03.07.04.15.04.22 0 .11-.02.21-.05.3l-.1.27a.6.6 0 00-.06.23c0 .06.02.1.04.13.03.02.06.03.1.03.07 0 .16-.04.25-.11a2.03 2.03 0 00.55-.7l.08.09a2.6 2.6 0 01-.27.46c-.1.14-.21.25-.34.33a.7.7 0 01-.4.13c-.12 0-.22-.03-.29-.1a.34.34 0 01-.1-.25c0-.07.01-.15.04-.23a7.47 7.47 0 00.1-.5c0-.08-.01-.13-.05-.16a.18.18 0 00-.12-.04.31.31 0 00-.23.1.93.93 0 00-.18.25l-.15.33-.14.32c-.04.1-.1.19-.15.25-.05.07-.1.1-.17.1zm.47-1.84a3.87 3.87 0 00.75-1.17.99.99 0 00.07-.27V.9c-.02 0-.06.04-.13.12a3.63 3.63 0 00-.48.8c-.08.17-.15.35-.21.53zm2.35 1.87a.67.67 0 01-.5-.17.58.58 0 01-.17-.43c0-.15.04-.3.11-.47a1.9 1.9 0 01.73-.82.9.9 0 01.46-.14c.08 0 .17.03.24.08.08.04.12.13.12.26s-.03.25-.1.35c-.08.12-.18.21-.3.3a1.84 1.84 0 01-.86.32v.2c0 .04.02.09.04.13a.3.3 0 00.12.13c.05.03.12.04.22.04.14 0 .28-.03.42-.11a1.83 1.83 0 00.72-.75l.1.08a1.85 1.85 0 01-.83.87c-.17.09-.34.13-.52.13zm-.21-.9a.95.95 0 00.29-.1 1.54 1.54 0 00.55-.44.5.5 0 00.1-.27c0-.04-.01-.07-.03-.08l-.06-.02a.43.43 0 00-.24.08 1.73 1.73 0 00-.61.82zm3 1.11a10.54 10.54 0 01.51-1.96 3.77 3.77 0 00-.32.03c0-.1.04-.19.12-.25.08-.05.18-.1.31-.12a1.5 1.5 0 01.07-.21l.06-.17.1-.3a60.34 60.34 0 00.25-.77c0-.05-.03-.07-.07-.07a.32.32 0 00-.2.09 1.3 1.3 0 00-.32.52.8.8 0 00-.05.25v.1l.05.13c-.14 0-.25-.03-.3-.09a.34.34 0 01-.1-.24c0-.11.03-.23.1-.34a1.48 1.48 0 01.61-.54.79.79 0 01.34-.09c.1 0 .18.03.22.08.04.06.06.13.06.2l-.01.1-.03.11-.36 1.2h.25a9.93 9.93 0 01.87.04A46.72 46.72 0 0144.1.99a20.45 20.45 0 01.18-.42.38.38 0 01.1-.12.32.32 0 01.2-.05 12.96 12.96 0 00-.52 1.75l.2.01h.23c-.1.1-.2.17-.27.2a.8.8 0 01-.22.04 18.95 18.95 0 00-.27 1.39 3.77 3.77 0 00-.02.52l.02.13c-.17-.02-.29-.06-.35-.13-.06-.06-.09-.18-.09-.34a2.41 2.41 0 01.08-.59 6.23 6.23 0 01.28-.98 20.9 20.9 0 00-1.15.04l-.03.08a49.1 49.1 0 00-.22.71l-.27.86a.42.42 0 01-.19.27.48.48 0 01-.23.07zm3.42-.21c-.21 0-.38-.06-.5-.17a.58.58 0 01-.17-.43c0-.15.04-.3.11-.47a1.9 1.9 0 01.73-.82.9.9 0 01.46-.14c.09 0 .17.03.24.08.08.04.12.13.12.26s-.03.25-.1.35c-.08.12-.18.21-.3.3a1.84 1.84 0 01-.86.32v.2c0 .04.02.09.04.13a.3.3 0 00.12.13c.05.03.13.04.22.04.14 0 .28-.03.42-.11a1.84 1.84 0 00.72-.75l.1.08a1.85 1.85 0 01-.83.87c-.17.09-.34.13-.52.13zm-.21-.9a.95.95 0 00.29-.1 1.55 1.55 0 00.55-.44.5.5 0 00.1-.27c0-.04-.01-.07-.03-.08l-.06-.02a.43.43 0 00-.24.08 1.72 1.72 0 00-.61.82zm1.61.92a.4.4 0 01-.28-.12c-.09-.07-.13-.18-.13-.33 0-.11.03-.24.08-.38a1.93 1.93 0 01.54-.76c.12-.11.25-.2.39-.27.13-.06.27-.1.4-.1a.6.6 0 01.37.12c.1.07.15.17.15.29 0 .08-.03.15-.1.19a.3.3 0 01-.22.04.88.88 0 00.03-.19.4.4 0 00-.04-.18c-.03-.05-.09-.08-.17-.08-.1 0-.19.03-.29.1-.1.06-.19.14-.28.25a2.07 2.07 0 00-.4.69.98.98 0 00-.06.31c0 .1.04.16.12.16.07 0 .16-.04.25-.11a6.6 6.6 0 00.78-.94l.04-.02a.94.94 0 01.19.07.1.1 0 01.05.1c0 .04-.03.1-.07.17l-.15.25a.51.51 0 00-.07.23c0 .05.01.09.04.13.02.04.06.06.11.06.08 0 .2-.06.34-.18s.3-.32.44-.6l.1.09c-.13.27-.28.5-.46.67a.82.82 0 01-.56.25c-.13 0-.24-.04-.3-.13a.5.5 0 01-.11-.28v-.03a2.9 2.9 0 01-.37.38.54.54 0 01-.36.15zm2.87-.11a.44.44 0 01-.3-.1.32.32 0 01-.12-.26c0-.1.03-.2.07-.3l.15-.32c.04-.1.07-.19.07-.27a.26.26 0 00-.08-.19.62.62 0 00-.17-.13 5.23 5.23 0 01-.47.94l-.07-.15a9.52 9.52 0 00.4-.9.18.18 0 01-.05-.14c0-.09.03-.17.08-.25.05-.07.1-.11.15-.11.05 0 .07.02.09.07l.03.09c0 .02 0 .05-.02.09l-.04.1c0 .03.04.07.09.1l.19.13c.07.04.13.1.19.17.05.07.07.16.07.26s-.02.2-.06.3l-.13.28a.52.52 0 00-.06.23c0 .04 0 .07.03.09a.2.2 0 00.09.02c.08 0 .16-.02.25-.07s.17-.11.26-.19a1.85 1.85 0 00.36-.48l.12.1a1.74 1.74 0 01-.68.76.87.87 0 01-.44.13zm1.35.1a.49.49 0 01-.36-.13c-.09-.09-.13-.22-.13-.4 0-.13.02-.3.07-.5s.12-.42.2-.64a.5.5 0 00-.08-.01.48.48 0 01-.1-.03v-.15l.14.01.1.01a7.13 7.13 0 01.48-.96c.08-.13.16-.23.23-.3.07-.08.14-.11.2-.11.03 0 .06 0 .1.03.02.03.04.06.04.11 0 .07-.04.16-.1.29l-.26.43a7 7 0 00-.29.52h.16a13.98 13.98 0 00.76-.03v.17a19.98 19.98 0 01-.95.06h-.06c-.07.16-.13.33-.18.5-.05.17-.08.34-.08.5 0 .14.02.23.07.29.04.06.1.08.2.08.17 0 .34-.07.51-.22.18-.15.33-.36.46-.62l.07.05c-.09.2-.2.38-.32.53-.13.17-.27.29-.42.38-.15.1-.3.14-.46.14zm2.5-3.1a.57.57 0 01-.12-.08c-.04-.04-.06-.08-.06-.12 0-.05.03-.11.08-.17l.16-.19c.05-.07.1-.13.11-.19.05 0 .1.02.13.05.04.04.06.08.06.13 0 .04-.02.1-.07.17-.04.07-.1.14-.15.2l-.15.2zm-.63 0a.57.57 0 01-.11-.08C52.33 1 52.3.96 52.3.92c0-.05.03-.11.08-.17l.16-.19c.05-.07.1-.13.11-.19.05 0 .1.02.13.05.04.04.06.08.06.13 0 .04-.02.1-.07.17-.04.07-.1.14-.15.2l-.15.2z"
          fill="black"
        />
      </svg>
    </div>
  );
}