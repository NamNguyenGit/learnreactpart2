import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object({
      title: yup.string().required('Title required').min(5, 'Title is too short'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('TODO FORMl', values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
