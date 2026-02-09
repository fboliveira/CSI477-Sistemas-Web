import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import { CirclePlusIcon, Edit, TrashIcon } from "lucide-react";
import { type TaskInterface } from "../../types/tasks";

const ListTasks = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  useEffect(() => {
    api.get("/api/tasks").then((response) => {
      console.log(response);
      setTasks(response.data);
    });
  }, []);

  const handleDeleteTask = async (id: number) => {
    // Validações ...
    if (!confirm("Confirma exclusão da Tarefa?")) {
      return;
    }

    try {
      const project = await api.delete("/api/tasks", {
        data: {
          id,
        },
      });

      console.log(project);
      alert("Tarefa excluída com sucesso!");

      // Atualizar?
      setTasks(tasks.filter((task) => task.id != id));
    } catch (error) {
      alert("Erro na exclusão da Tarefa!");
      console.error(error);
    }
  };

  const formatDate = (date: string) => {

    const formatador = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short',
    });

    return formatador.format(new Date(date));
  }

  const formatStatus = (status: boolean) => {

    if (status === undefined || !status) {
        return "Em aberto"
    }

    return "Concluído"

  }

  return (
    <>
      <AppHeader title="Lista de tarefas" />

      <div className="flex justify-center">
        <Link
          to="/tasks/create"
          className="rounded-md bg-lime-600 px-8 py-2 text-sm font-medium text-white transition-all hover:bg-blue-800"
        >
          <div className="flex justify-center gap-2">
            <CirclePlusIcon />
            <span>Cadastrar</span>
          </div>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">
                Id
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Descrição
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Projeto
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Criado
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Alterado
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Ação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="even:bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">{task.project.name}</td>
                <td className="px-6 py-4">{formatStatus(task.done)}</td>
                <td className="px-6 py-4">{formatDate(task.created_at)}</td>
                <td className="px-6 py-4">{formatDate(task.updated_at)}</td>
                <td className="px-6 py-4 flex">
                  <Link to={`/tasks/${task.id}`} className="text-blue-600 hover:underline px-6" ><Edit /></Link>
                  <button className="text-red-800 hover:underline cursor-pointer"
                    onClick={() => {
                      handleDeleteTask(task.id);
                    }}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTasks;
