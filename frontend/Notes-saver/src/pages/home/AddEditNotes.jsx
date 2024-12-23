import React from "react";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="go to gym at 6"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-xs text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="content"
          rows={10}
        ></textarea>

      <div className="">
        <label className="input-label">TAGS</label>
      </div>

      <button className="btn-primary font-medium mt-5 p-3" onClick={() => {}}>ADD</button>

      </div>
    </div>
  );
};

export default AddEditNotes;
