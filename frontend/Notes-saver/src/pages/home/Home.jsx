import React from "react";
import Navbar from "../../components/navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="meeting at 9"
            date="12th April 2024"
            content="will talk about politics and stuff hehe"
            tags="#niggas in paris"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button className="w-16 h-16 items-center justify-between rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" onClick={() => {}}>
        <MdAdd className="text-[62px] text-white" />
      </button>
    </>
  );
};

export default Home;
