# MySQL to DirtyDB Migration

This project migrates data from a MySQL database to a DirtyDB database using the `ueberdb2` library.

## Prerequisites

- Node.js
- MySQL database

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```env
    DB_USER=<your-mysql-username>
    DB_HOST=<your-mysql-host>
    DB_PORT=<your-mysql-port>
    DB_PASSWORD=<your-mysql-password>
    DB_NAME=<your-mysql-database-name>
    DB_ENGINE=<your-mysql-engine>
    ```

## Usage

1. Run the migration script:
    ```sh
    node index.js
    ```

2. The data from the MySQL database will be migrated to `dirty.db`.
