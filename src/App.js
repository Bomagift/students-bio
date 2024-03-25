import React, { useState } from 'react';
import './App.css';

function App() {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: 'Deborah adamu',
      picture: '/asset/image 5.jpg',
      info: 'Web 3 Intern',
      department: 'Web 3',
      grading: 85,
    },
    {
      id: 2,
      name: ' Boma Gift',
      picture: '/asset/image 2.jpg',
      info: 'Frontend Intern',
      department: 'Software Engineering',
      grading: 92,
    },
    {
      id: 3,
      name: 'Benjamin ovu',
      picture: '/asset/image-1.jpg',
      info: 'Backend Intern',
      department: 'Software Engineering',
      grading: 78,
    },
    {
      id: 4,
      name: 'Favour Akujobi ',
    picture: '/asset/image 2.jpg',
      info: 'Design Intern',
      department: 'Product Design',
      grading: 88,
    },
  ]);

  const [filterDepartment, setFilterDepartment] = useState('All');

  const handleDepartmentFilterChange = (event) => {
    setFilterDepartment(event.target.value);
  };

  const filteredInterns = filterDepartment === 'All' ? interns : interns.filter(intern => intern.department === filterDepartment);

  const sortByName = () => {
    const sortedInterns = [...filteredInterns].sort((a, b) => a.name.localeCompare(b.name));
    setInterns(sortedInterns);
  };

  const sortByGrading = () => {
    const sortedInterns = [...filteredInterns].sort((a, b) => b.grading - a.grading);
    setInterns(sortedInterns);
  };

  const findTopIntern = () => {
    let topIntern = filteredInterns.reduce((prev, current) => (prev.grading > current.grading ? prev : current));
    return topIntern;
  };

  const topIntern = findTopIntern();

  return (
    <div className="app">
      <h1>Interns Assignment Scores</h1>
      <div className="filter">
        <label htmlFor="departmentFilter">Filter by Department:</label>
        <select id="departmentFilter" value={filterDepartment} onChange={handleDepartmentFilterChange}>
          <option value="All">All Departments</option>
          <option value="Web 3">Web 3</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Product Design">Product Design</option>
        </select>
      </div>
      <div className="sort">
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByGrading}>Sort by Grading</button>
      </div>
      <div className="interns-list">
        {filteredInterns.map((intern) => (
          <div key={intern.id} className="intern-card">
            <img src={intern.picture} alt={intern.name} />
            <div className="intern-info">
              <h2>{intern.name}</h2>
              <p>{intern.info}</p>
              <p>Department: {intern.department}</p>
              <p>Grading: {intern.grading}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="top-intern">
        <h2>Top Intern</h2>
        <div className="intern-card">
          <img src={topIntern.picture} alt={topIntern.name} />
          <div className="intern-info">
            <h2>{topIntern.name}</h2>
            <p>{topIntern.info}</p>
            <p>Department: {topIntern.department}</p>
            <p>Grading: {topIntern.grading}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;