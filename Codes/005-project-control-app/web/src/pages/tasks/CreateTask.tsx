import { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader";
import Label from "../../components/Label";
import type { ProjectInterface } from "../../types/projects";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [description, setDescription] = useState("");
  const [project_id, setProjectId] = useState("");

  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    api.get("/api/projects").then((response) => {
  
      const data : ProjectInterface[] = response.data
      data.sort((a, b) => a.name.localeCompare(b.name))
      setProjects(data);

    });
  }, []);

  const navigate = useNavigate()

  const handleCreateTask = async (
    event : React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    // Validações ...
    // Construir os dados para envio
    const data = {
      description,
      project_id: parseInt(String(project_id))
    }

    try {
      
      const response = await api.post('/api/tasks', data)
      const { id } = response.data
      alert(`Tarefa cadastrada com sucesso! Id: ${id}`)
      navigate('/tasks')

    } catch (error) {
      alert("Erro no cadastro da tarefa!")
      console.error(error)
    }    

  }

  return (
    <>
      <AppHeader title="Adicionar Tarefa" />

      <form onSubmit={handleCreateTask} className="container">
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
          <Label id="project_id" description="Projeto" />

          <select 
            name="project_id" 
            id="project_id"
            value={project_id}
            onChange={(e) => setProjectId(e.target.value)}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all shadow-sm"
          >

            <option value="" disabled selected>Selecione:</option>

            {
              projects.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))
            }

          </select>


        </div>

        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <button
            type="submit"
            className="rounded-md bg-lime-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-800"
          >
            Cadastrar
          </button>
          <button
            type="reset"
            className="rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-red-800"
          >
            Limpar
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTask;
