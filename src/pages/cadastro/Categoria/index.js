import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://kflix-backend.herokuapp.com/categorias';

    fetch(URL)
      .then(async (response) => {
        const data = await response.json();
        setCategorias([
          ...data,
        ]);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([...categorias, values]);
    clearForm();
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
