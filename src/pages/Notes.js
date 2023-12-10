import {MdClose} from 'react-icons/md';
import {CiSearch} from 'react-icons/ci';
import {BsPlusLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import NoteItem from '../components/NoteItem';
import { useEffect, useState } from 'react';

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase()) || note.details.toLowerCase().match(text.toLowerCase())){
        return note;
      }
      // if(note.details.toLowerCase().match(text.toLowerCase())){
      //   return note;
      // }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Notelify</h2>}
        {showSearch && <input type="text" autoFocus placeholder='Keyword...' value={text} onChange={e => {setText(e.target.value); handleSearch()}}/>}
        
        <button className='btn' onClick={() => setShowSearch (prevState => !prevState)}>{showSearch ? <MdClose/> : <CiSearch />}</button>
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && <p className='empty__notes'>No notes available.</p>}
        {
          filteredNotes.map(note => <NoteItem key={note.id} note= {note}/>)
        }
      </div>
      <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes