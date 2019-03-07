This is Spring-Boot web application with Angular frontend and Postgres database.

Build steps:
1. Create local database "zagnitko_booking" (it should be on localhost:5432 with username/password = postgres/postgres).
2. Nagivate to base directory and execute "mvn clean install".
3. Navigate to "backend" directory and execute "mvn spring-boot:run".

If everything is OK, you'll be able to open the application at http://localhost:9090/

For frontend development server you should go to "frontend/src/main/frontend/" and execute "npm start".
Angular frontend app will be available at http://localhost:4200