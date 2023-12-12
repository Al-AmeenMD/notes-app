import { Link, useNavigate, useParams } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";
import { FaSave } from "react-icons/fa";

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();

    if(title && details) {
      const updatedNote = {...note, title, details, date}

      const updatedNotes = notes.map(item => {
        if(item.id == id){
          item = updatedNote;
        }
        return item;
      })
      setNotes(updatedNotes);
    }

    //redirect to notespage

    navigate('/');
  }

  const handleDelete = () => {
    if(window.confirm('Please confirm if you want to delete')){
      const newNotes = notes.filter(item => item.id != id)
  
      setNotes(newNotes);
      navigate('/')

    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to="/"><button className="btn lg primary"><HiArrowSmallLeft/></button></Link>
        <button className="btn danger" onClick={handleDelete}><MdDelete/></button>
        <button className="btn lg primary" onClick={handleSubmit}><FaSave /></button>
      </header>

      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" autoFocus placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows="50" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Note details..."></textarea>
      </form>
    </section>
  )
}

export default EditNote