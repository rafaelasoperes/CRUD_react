import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Cadastrar() {

  const [data, setData] = useState({
    codigo: '',
    nome: '',
    nascimento: '',
    foto: '',
  });

  const [message, setMessage] = useState("");

  const valueImput = (e: any) => setData({ ...data, [e.target.name]: e.target.value });

  const addUser = async (e: any) => {

    e.preventDefault();

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    };

    console.log(data)

    await axios.post('http://localhost:8080/tarefas', data, headers)
      .then((response) => {

        if (response.data.id) {
          setData({
            codigo: '',
            nome: '',
            nascimento: '',
            foto: '',
          });
        }

        setMessage("Usuário cadastro com sucesso!")

      }).catch((err) => {
        setMessage("Problema ao cadastrar usuário!")

      });

  }

  return (
    <>
      <Head>
        <title>Cadastro Usuário</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Link href={"/"}><button type="button">Listar</button></Link>

        <h2>Cadastrar Usuário</h2>

        {message ? <p>{message}</p> : ""}

        <form onSubmit={addUser}>
          <label>Código: </label>
          <input type="text" name="codigo" placeholder="Digite o código:" onChange={valueImput} value={data.codigo} /><br /><br />

          <label>Nome: </label>
          <input type="text" name="nome" placeholder="Digite o seu Nome:" onChange={valueImput} value={data.nome} /><br /><br />

          <label>Data de nascimento: </label>
          <input type="date" name="nascimento" onChange={valueImput} value={data.nascimento} /><br /><br />

          <label htmlFor="foto">Foto:</label>
          <input type="file" id="foto" name="foto" onChange={valueImput} value={data.foto} /><br /><br />

          <button type="submit">Enviar</button><br /><br />
        </form>

      </main>
    </>
  );
}
