import { client, q } from '../config/db'

const createNote = (name, text) => client.query(
  q.Create(
    q.Collection('notes'),
    {
      data: {
        name,
        text
      },
    },
  )
)
.then(ret => ret)
.catch(err => console.warn(err))


export default createNote;
