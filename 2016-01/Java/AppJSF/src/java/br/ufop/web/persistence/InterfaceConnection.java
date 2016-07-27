/*
 * 
 */
package br.ufop.web.persistence;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 *
 * Created on 23/07/2016 - 11:58:30
 */
public interface InterfaceConnection {

    // Recupera conexao com o banco de dados
    Connection getConnection();

    /**
     * @return the database
     */
    String getDatabase();

    /**
     * @return the dbPassword
     */
    String getDbPassword();

    /**
     * @return the dbUsername
     */
    String getDbUsername();

    /**
     * @return the host
     */
    String getHost();

    Statement getStatement();

    boolean isParameterSet() throws Exception;

    /**
     * @param connection the connection to set
     */
    void setConnection(Connection connection);

    /**
     * @param database the database to set
     */
    void setDatabase(String database);

    /**
     * @param dbPassword the dbPassword to set
     */
    void setDbPassword(String dbPassword);

    /**
     * @param dbUsername the dbUsername to set
     */
    void setDbUsername(String dbUsername);

    /**
     * @param host the host to set
     */
    void setHost(String host);
    
    public ResultSet executeQuery(String instruction);
    public boolean executeUpdate(String instruction);
    
}
