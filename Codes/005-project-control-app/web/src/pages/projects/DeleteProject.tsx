import { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader";
import api from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";

const DeleteProject = () => {
  // Hook: useState
  const [name, setName] = useState("");
  
  // Hook: react-router-dom
  const navigate = useNavigate();

  // Recuperar as informações do projeto:
  // ID do projeto -> recuperar as informações
  const { id } = useParams()

  useEffect(() => {

    api.get(`/api/projects/${id}`)
      .then(response => {
        setName(response.data.name)
      })
      .catch(error => {
        console.error(error)
        alert('Projeto inválido!')
        navigate('/projects')
      })

  }, [id, navigate])

  const handleDeleteProject = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

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
      navigate("/projects");
    } catch (error) {
      alert("Erro ao excluir o Projeto!");
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader title="Exclusão de projeto" />

      <form onSubmit={handleDeleteProject} className="container">
        <div className="w-full p-4">
          <label
            htmlFor="name"
            className="text-xl font-medium leading-none text-slate-700"
          >
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do projeto"
            value={name}
            disabled={true}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all shadow-sm"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <button
            type="submit"
            className="rounded-md bg-red-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-red-600"
          >
            Excluir
          </button>
          <Link
            to="/projects"
            className="rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transitisrc/pages/projects/UpdateProject.tsxon-all hover:bg-blue-800"
          >
            Voltar
          </Link>
        </div>
      </form>
    </>
  );
};

export default DeleteProject;
