db.createUser(
    {
        user: "dummy",
        pwd: "test",
        roles: [
            {
                role: "readWrite",
                db: "dummy"
            }
        ]
    }
);