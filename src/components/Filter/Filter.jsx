import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/slice';
import { Lable, Input, Name } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = (evt) => {
    dispatch(filter(evt.target.value.toLowerCase()));
  };

  return (
    <div>
      <Lable>
        <Name> Find contacts by name</Name>
        <Input type="text" onChange={onChange} />
      </Lable>
    </div>
  );
};

export default Filter;
