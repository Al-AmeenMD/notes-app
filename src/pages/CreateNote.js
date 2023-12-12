import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { FaSave } from "react-icons/fa";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import useCreateDate from "../components/useCreateDate";

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details){
      const note = {id: uuid(), title, details, date}
      // add this note to the notes array
      setNotes(prevNotes => [note, ...prevNotes])
     
      // console.log(note);

      // redirect to home page
      navigate('/')
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to="/"><button className="btn lg primary"><HiArrowSmallLeft/></button></Link>
        <button className="btn lg primary" onClick={handleSubmit}><FaSave /></button>
      </header>

      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="50" placeholder="Note details..." value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default CreateNote;