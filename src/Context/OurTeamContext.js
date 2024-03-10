import React from "react";
import { createContext } from "react";
const TeamContext = createContext({
  team: [
    {
      name: "John Doe",
      position: "CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1682095953404-9b04b5513fa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvciUyMGltYWdlfGVufDB8fDB8fHww",
    },
    {
      name: "Jane Smith",
      position: "Chief Medical Officer",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/jane-smith.jpg",
    },
    {
      name: "Michael Johnson",
      position: "Head of Operations",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageUrl: "/michael-johnson.jpg",
    },
  ],
});
export default TeamContext;
