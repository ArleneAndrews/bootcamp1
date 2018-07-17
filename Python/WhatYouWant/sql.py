import sqlite3

with sqlite3.connect ("project.db") as connection:
    c = connection.cursor()
    c.execute("""CREATE TABLE "spot" ( `spotname` TEXT NOT NULL UNIQUE, `spotlat` REAL NOT NULL UNIQUE, `spotlong` REAL NOT NULL UNIQUE, PRIMARY KEY(`spotname`)""")
    c.execute("""CREATE TABLE tags ( tag_id INTEGER NOT NULL, venue INTEGER NOT NULL, PRIMARY KEY (tag_id, venue), FOREIGN KEY(tag_id) REFERENCES tag (id), FOREIGN KEY(venue) REFERENCES venue ("veuneName")""" )
    C.execute("""CREATE TABLE "venue" ( `venueName` TEXT NOT NULL UNIQUE, `venueLocation` TEXT NOT NULL UNIQUE, `venueLat` REAL NOT NULL UNIQUE, `venueLong` REAL NOT NULL UNIQUE, `venuePhone` NUMERIC UNIQUE, `venueVisit` INTEGER, `venueReview` BLOB, `venueStars` INTEGER, `tags` TEXT )""")
    c.execute ('INSERT INTO spot VALUES("home", 41.1454, -104.792)')
    # c.execute ('INSERT INTO posts VALUES("Well", "I\'m well.")')