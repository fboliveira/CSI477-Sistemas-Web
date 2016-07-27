/*
 * 
 */
package br.ufop.web.persistence;

import java.sql.ResultSet;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 *
 * Created on 23/07/2016 - 12:48:01
 */
public class DataSource {

    private static InterfaceConnection connection;
    private static DataSource dataSource;

    public static InterfaceConnection getConnection() {

        if (dataSource == null) {
            dataSource = new DataSource();
        }

        return connection;
    }

    private static void setConnection(InterfaceConnection conn) {
        connection = conn;
    }

    private void connect() {

        // Set parameters
        MySQLConnectionProcess.getInstance().setHost("localhost");
        MySQLConnectionProcess.getInstance().setDatabase("academico");
        MySQLConnectionProcess.getInstance().setDbUsername("sistemaweb");
        MySQLConnectionProcess.getInstance().setDbPassword("123456");

        // Set used connection
        setConnection(MySQLConnectionProcess.getInstance());

    }

    // Singleton    
    private DataSource() {
        this.connect();
    }

    public static ResultSet executeQuery(String instruction) {
        return getConnection().executeQuery(instruction);
    }

    public static boolean executeUpdate(String instruction) {
        return getConnection().executeUpdate(instruction);
    }

}
