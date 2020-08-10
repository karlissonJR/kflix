import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

import repositorioVideos from '../../../repositories/videos';
import repositorioCategorias from '../../../repositories/categorias';

function CadastroVideo() {
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const [categorias, setCategorias] = useState([]);
  const history = useHistory();
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    repositorioCategorias.getAll()
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const categoria = categorias.find((categoria) => categoria.titulo === values.categoria);

    repositorioVideos.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoria.id,
    })
      .then(() => {
        clearForm();
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de vídeo
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
