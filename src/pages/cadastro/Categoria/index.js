import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  return (
      <PageDefault>
          <h1>
            Cadastro de categoria: {values.nome}
          </h1>

          <form onSubmit={handleSubmit}>
            
            <FormField
              label="Nome"
              type="text"
              value={values.nome}
              name="nome"
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

            <button>Cadastrar</button>
          </form>

          <ul>
            {categorias.map((categoria, indice) => {
              return(
                <li key={`${categoria.nome}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>


          <Link to="/">
              Ir para home
          </Link>
      </PageDefault>
  );
}

export default CadastroCategoria;
