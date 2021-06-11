import React from 'react';
import ListOfProjects from '../projects/ListOfProjects';
import NewProject from '../projects/NewProject';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
      </h1>

      <NewProject />

      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListOfProjects />
      </div>
    </aside>
  );
};

export default Sidebar;
