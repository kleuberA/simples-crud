import { db } from "../db.js";

export const getUsers = (_, res) => {
    const query = "SELECT * FROM usuario";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}


export const addUser = (req, res) =>{
    const query = "INSERT INTO usuario(`nome`, `senha`) VALUES(?)";

    const values =[
        req.body.nome,
        req.body.senha,
    ]

    db.query(query, [values],(err) =>{
        if (err) return  res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const updateUser = (req, res) => {
    const q = "UPDATE usuario SET `nome` = ?, `senha` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.senha,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso!");
    });
  };
  
  export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuario WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso!");
    });
  };