import { useEffect, useState } from "react";
import api from "../../services/api";
import { type ProjectInterface } from "../../types/projects";
import AppHeader from "../../components/AppHeader";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { CirclePlusIcon } from "lucide-react";

const ListProjects = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    api.get("/api/projects").then((response) => {
      // console.log(response)
      setProjects(response.data);
    });
  }, []);

  const handleDeleteProject = async (
    id: number
  ) => {
    
    // Validações
    // ...
    if (!window.confirm("Confirma a exclusão do projeto?")) {
      return
    }

    const data = {
      id : parseInt(String(id)),
    };

    try {
      const response = await api.delete("/api/projects", {
        data
      });
      console.log(response);
      const { id } = response.data.project;
      alert(`Projeto excluído com sucesso! Id: ${id}`);

      // Atualizar?
      setProjects( projects.filter( p => p.id != id ) )
      
    } catch (error) {
      alert("Erro ao excluir o Projeto!");
      console.error(error);
    }
  };

  return (
    <>
        <AppHeader title="Lista de projetos" />

        <div className="flex justify-center">
            <Link
            to="/projects/create"
            className="rounded-md bg-lime-600 px-8 py-2 text-sm font-medium text-white transition-all hover:bg-blue-800"
            >
              <div className="flex justify-center gap-2">
                <CirclePlusIcon /><span>Cadastrar</span>
              </div>
            </Link>
        </div>

      <div className="flex flex-wrap justify-center">
        {projects.map((p) => (
          <div>
            <Card 
              id={p.id} 
              name={p.name}
              updateUrl={`/projects/${p.id}`}            
              deleteUrl={`/projects/${p.id}/delete`}            
              />
            <button
              onClick={() => {
                handleDeleteProject(p.id)
              }}
            >Excluir</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProjects;
