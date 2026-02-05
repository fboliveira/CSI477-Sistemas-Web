import { useEffect, useState } from "react";
import api from "../../services/api";
import { type ProjectInterface } from "../../types/projects";
import AppHeader from "../../components/AppHeader";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { CirclePlus } from "lucide-react";
=======
import { CirclePlusIcon } from "lucide-react";
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04

const ListProjects = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    api.get("/api/projects").then((response) => {
      // console.log(response)
      setProjects(response.data);
    });
  }, []);

  return (
    <>
        <AppHeader title="Lista de projetos" />

        <div className="flex justify-center">
            <Link
            to="/projects/create"
            className="rounded-md bg-lime-900 px-8 py-2 text-sm font-medium text-white transition-all hover:bg-blue-800"
            >
<<<<<<< HEAD
            <CirclePlus/>Cadastrar
=======
            <CirclePlusIcon />Cadastrar
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
            </Link>
        </div>

      <div className="flex flex-wrap justify-center">
        {projects.map((p) => (
          <Card 
<<<<<<< HEAD
          id={p.id} 
          name={p.name} 
          updateUrl={`/projects/${p.id}`}
          deleteUrl={`/projects/${p.id}`}
          />
=======
            id={p.id} 
            name={p.name}
            updateUrl={`/projects/${p.id}`}            
            deleteUrl={`/projects/${p.id}`}            
            />
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
        ))}
      </div>
    </>
  );
};

export default ListProjects;
