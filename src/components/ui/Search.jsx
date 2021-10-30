import { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    const q = e.target.value;

    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input type="text" className="form-control" placeholder="Search character..." onChange={handleChange} value={text} autoFocus />
      </form>
    </section>
  );
};

export default Search;
