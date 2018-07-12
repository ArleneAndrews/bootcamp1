import sqlite3

with sqlite3.connect ("project.db") as connection:
    c = connection.cursor()
