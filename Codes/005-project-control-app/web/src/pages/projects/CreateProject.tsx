import { useState } from "react";
import AppHeader from "../../components/AppHeader";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  // Hook: useState
  const [name, setName] = useState("");

  // Hook: react-router-dom
  const navigate = useNavigate();

  const handleCreateProject = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const data = {
      name,
    };

    try {
      const response = await api.post("/api/projects", data);
      console.log(response);
      const { id } = response.data;
      alert(`Projeto inserido com sucesso! Id: ${id}`);
      navigate("/projects");
    } catch (error) {
      alert("Erro ao cadastrar o Projeto!");
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader title="Cadastro de projeto" />

      <form onSubmit={handleCreateProject} className="container">
        <div className="w-full p-4">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none text-slate-700"
          >
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do projeto"
            value={name}
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all shadow-sm"
            onChange={(event) => setName(event.target.value)}
          />
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

export default CreateProject;
