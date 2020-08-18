import React, { memo } from 'react'

const NoteList = memo(({data, onRemove, onEdit}) => (
  <>
    {data && data.map(note => (
      <div key={note.ref.id} className="note-row">
        <p>
            {note.data.text}
        </p>
      </div>
    ))}
  </>
))

export default NoteList;