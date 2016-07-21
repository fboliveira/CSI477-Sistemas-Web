/*
 * 
 */
package br.ufop.web.usuario;

import br.ufop.web.persistence.MySQLConnectionProcess;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Fernando B Oliveira - fernando@decea.ufop.br
 */
@WebServlet(name = "Login", urlPatterns = {"/Login", "/doLogin"})
public class Login extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {

            String nome = request.getParameter("usuario");
            String senha = request.getParameter("senha");

            // Acesso ao banco de dados e validação
            MySQLConnectionProcess.getInstance().setHost("localhost");
            MySQLConnectionProcess.getInstance().setDatabase("academico");
            MySQLConnectionProcess.getInstance().setDbUsername("sistemaweb");
            MySQLConnectionProcess.getInstance().setDbPassword("123456");

            String sql = "SELECT * FROM usuarios "
                    + " WHERE login = '" + nome + "'"
                    + " AND senha = md5('" + senha + "')";
            ResultSet rs = MySQLConnectionProcess
                    .getInstance()
                    .getStatement()
                    .executeQuery(sql);

            // Resultado
            String mensagem = "Usuário e/ou senha inválidos !";
            Usuario usuario = new Usuario();

            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<link rel=\"stylesheet\" href=\"./css/bootstrap.min.css\">");
            out.println("<title>Acesso ao Sistema</title>");
            out.println("</head>");
            out.println("<body>");

            if (rs.next()) {
                mensagem = "Acesso realizado com sucesso!";
                usuario.login(nome);

                out.println("<h1>" + mensagem + "</h1>");

                // SELECT - ALUNOS
                sql = "SELECT id, nome FROM alunos ORDER BY nome";

                // EXECUTAR CONSULTA - RESULTSET
                ResultSet rsAlunos = MySQLConnectionProcess
                        .getInstance()
                        .getStatement()
                        .executeQuery(sql);

                // Parte inicial da tabela
                out.println("<table class=\"table table-striped table-bordered table-hover\">");
                out.println("    <thead>\n"
                        + "      <tr>\n"
                        + "        <th>Id</th>\n"
                        + "        <th>Nome</th>\n"
                        + "      </tr>\n"
                        + "    </thead>"
                        + "    <tbody>");

                // PERCORRER RS - WHILE
                while (rsAlunos.next()) {
                    // PRODUZIR HTML - TABELA
                    out.println("<tr><td>");
                    out.println(rsAlunos.getInt("id"));
                    out.println("</td><td>");
                    out.println(rsAlunos.getString("nome"));
                    out.println("</td></tr>");
                }

                out.println("</tbody></table>");
            } else {

                out.println("<h1>" + mensagem + "</h1>");
                out.println("<a href=\"/AppInicial\" class=\"btn btn-default\">Voltar</a>");
            }

            out.println("</body>");
            out.println("</html>");

        } catch (SQLException ex) {
            Logger.getLogger(Login.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
