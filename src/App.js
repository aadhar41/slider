import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(data[index]);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  useEffect(() => {
    setPerson(data[index]);
    const lastIndex = people.length - 1;
    if (index > lastIndex) {
      setIndex(checkNumber(index - 1));
    }
    const timeout = setTimeout(() => {
      setIndex(checkNumber(index + 1));
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index, people]);


  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        <article className="person">
          <img src={person.image} alt={person.name} className="person-img" />
          <h4>{person.name}</h4>
          <p className="title">{person.title}</p>
          <p className="text">{person.quote}</p>
          <FaQuoteRight className="quote-icon" />
          <div className="button-container">
            <button className="prev" onClick={() => setIndex(checkNumber(index - 1))}>
              <FiChevronLeft className='icon' />
            </button>
            <button className="next" onClick={() => setIndex(checkNumber(index + 1))}>
              <FiChevronRight className='icon' />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default App;
