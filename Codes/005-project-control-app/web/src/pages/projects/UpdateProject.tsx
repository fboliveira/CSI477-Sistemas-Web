import { useEffect, useState } from "react";
import AppHeader from "../../components/AppHeader";
import api from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  // Hook: useState
  const [name, setName] = useState("");
<<<<<<< HEAD

=======
  
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
  // Hook: react-router-dom
  const navigate = useNavigate();

  // Recuperar as informações do projeto:
<<<<<<< HEAD
  // 
  const { id } = useParams()

  useEffect(()=> {
=======
  // ID do projeto -> recuperar as informações
  const { id } = useParams()

  useEffect(() => {
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04

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

  const handleUpdateProject = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const data = {
<<<<<<< HEAD
      id : parseInt(String(id)), 
=======
      id : parseInt(String(id)),
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
      name,
    };

    try {
      const response = await api.patch("/api/projects", data);
      console.log(response);
      const { id } = response.data;
      alert(`Projeto atualizado com sucesso! Id: ${id}`);
      navigate("/projects");
    } catch (error) {
      alert("Erro ao atualizar o Projeto!");
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader title="Atualização de projeto" />

      <form onSubmit={handleUpdateProject} className="container">
        <div className="w-full p-4">
          <label
            htmlFor="name"
<<<<<<< HEAD
            className="text-sm font-medium leading-none text-slate-700"
=======
            className="text-xl font-medium leading-none text-slate-700"
>>>>>>> 07ba762f7d25b37cc1223f05cef522a3df535d04
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
            Atualizar
          </button>
          <Link
            to="/projects"
            className="rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-red-800"
          >
            Voltar
          </Link>
        </div>
      </form>
    </>
  );
};

export default UpdateProject;
