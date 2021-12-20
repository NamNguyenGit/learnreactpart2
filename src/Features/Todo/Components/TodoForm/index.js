import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/form-controls/inputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: '',
    },
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
