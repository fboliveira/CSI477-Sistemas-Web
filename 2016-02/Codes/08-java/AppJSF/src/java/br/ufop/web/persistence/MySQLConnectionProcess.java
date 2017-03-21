/**
 *
 * @author Fernando Bernardes de Oliveira <https://github.com/fboliveira>
 *
 *
 */
package br.ufop.web.persistence;

// Conexao MySQL
import com.mysql.jdbc.Driver;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MySQLConnectionProcess {

    static MySQLConnectionProcess instance;
    // Objeto de conexao
    private Connection connection;
    // Parametros de conexao
    private String host = "localhost";
    private String database = "academico";
    private String dbUsername = "sistemaweb";
    private String dbPassword = "123456";

    // Utilizando padrão Singleton
    private MySQLConnectionProcess() {
    }

    public static MySQLConnectionProcess getInstance() {
        if (instance == null) {
            instance = new MySQLConnectionProcess();
        }

        return instance;
    }

    /**
     * @param connection the connection to set
     */
    public void setConnection(Connection connection) {
        this.connection = connection;
    }

    /**
     * @return the host
     */
    public String getHost() {
        return host;
    }

    /**
     * @param host the host to set
     */
    public void setHost(String host) {
        this.host = host;
    }

    /**
     * @return the database
     */
    public String getDatabase() {
        return database;
    }

    /**
     * @param database the database to set
     */
    public void setDatabase(String database) {
        this.database = database;
    }

    /**
     * @return the dbUsername
     */
    public String getDbUsername() {
        return dbUsername;
    }

    /**
     * @param dbUsername the dbUsername to set
     */
    public void setDbUsername(String dbUsername) {
        this.dbUsername = dbUsername;
    }

    /**
     * @return the dbPassword
     */
    public String getDbPassword() {
        return dbPassword;
    }

    /**
     * @param dbPassword the dbPassword to set
     */
    public void setDbPassword(String dbPassword) {
        this.dbPassword = dbPassword;
    }

    public boolean isParameterSet() throws Exception {
        if (this.getHost().length() == 0
                || this.getDatabase().length() == 0
                || this.getDbUsername().length() == 0
                || this.getDbPassword().length() == 0) {
            throw new Exception(MySQLConnectionProcess.class.getName()
                    + ": Set parameters to Open Database Connection !");
        }

        return true;
    }

    // Recupera conexao com o banco de dados
    public Connection getConnection() {
        if (connection == null) {
            try {
                new Driver();
                String url = "jdbc:mysql://" + getHost() + "/" + getDatabase();
                connection = DriverManager.getConnection(url,
                        this.getDbUsername(), this.getDbPassword());
            } catch (SQLException ex) {
                Logger.getLogger(MySQLConnectionProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

        return connection;
    }

    public Statement getStatement() {
        try {
            return this.getConnection().createStatement();
        } catch (SQLException ex) {
            Logger.getLogger(MySQLConnectionProcess.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    public ResultSet executeQuery(String instruction) {

        ResultSet resultSet = null;
        try {
            resultSet = MySQLConnectionProcess
                    .getInstance()
                    .getStatement()
                    .executeQuery(instruction);
        } catch (SQLException ex) {
            Logger.getLogger(Class.class.getName()).log(Level.SEVERE, null, ex);
        }

        return resultSet;

    }

    public boolean executeUpdate(String instruction) {
        boolean result;

        try {
            MySQLConnectionProcess.getInstance().getStatement().executeUpdate(instruction);
            result = true;
        } catch (SQLException ex) {
            Logger.getLogger(Class.class.getName()).log(Level.SEVERE, null, ex);
            result = false;
        }

        return result;
    }
}
