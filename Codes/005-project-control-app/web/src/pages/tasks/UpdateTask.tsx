import { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader";
import Label from "../../components/Label";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import type { ProjectInterface } from "../../types/projects";

const UpdateTask = () => {
  const [description, setDescription] = useState("");
  const [project_id, setProjectId] = useState("");
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

// Hook: react-router-dom
  const navigate = useNavigate();

  // Recuperar as informações do projeto:
  // ID do projeto -> recuperar as informações
  const { id } = useParams()

  useEffect(() => {

    api.get(`/api/tasks/${id}`)
      .then(response => {
        setDescription(response.data.description)
        setProjectId(response.data.project_id)
      })
      .catch(error => {
        console.error(error)
        alert('Tarefa inválida!')
        navigate('/tasks')
      })

  }, [id, navigate])  

  useEffect(() => {
    api.get("/api/projects").then((response) => {
      const data : ProjectInterface[] = response.data;
      data.sort((a, b) => a.name.localeCompare(b.name))
      setProjects(data)
    });
  }, []);

  const handleUpdateTask = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const data = {
      id : parseInt(String(id)),
      description,
      project_id
    };

    try {
      const response = await api.patch("/api/tasks", data);
      console.log(response);
      const { id } = response.data;
      alert(`Tarefa atualizada com sucesso! Id: ${id}`);
      navigate("/tasks");
    } catch (error) {
      alert("Erro ao atualizar a Tarefa!");
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader title="Atualizar Tarefa" />

      <form onSubmit={handleUpdateTask} className="container">
        <div className="w-full p-4">
          <Label id="descrption" description="Descrição" />

          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            placeholder="Descrição da tarefa"
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all shadow-sm"
          />
        </div>

        <div className="w-full p-4">
          <Label id="project_id_input" description="Projeto" />
          <input
            type="text"
            name="project_id_input"
            value={project_id}
            onChange={(e) => setProjectId(e.target.value)}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all shadow-sm"
          />
        </div>

        <div className="w-full p-4">
          <Label id="project_id_select" description="Projeto" />

          <select 
            name="project_id_select" 
            id="project_id_select"
            onChange={(e) => setProjectId(e.target.value)}
            value={project_id}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all shadow-sm"
          >
            <option value="" disabled>Selecione:</option>

            {              
              projects.map(p => (
                <option value={p.id}>{p.name}</option>
              ))
            }

          </select>

        </div>


        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <button
            type="submit"
            className="rounded-md bg-lime-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-800"
          >
            Atualizar
          </button>
          <Link
            to="/tasks"
            className="rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-red-800"
          >
            Voltar
          </Link>
        </div>
      </form>
    </>
  );
};

export default UpdateTask;
