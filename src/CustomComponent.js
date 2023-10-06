import React from 'react';

const CustomComponent = () => {
  const function1 = () => {
    const data = ['element 1', 'element 2', 'element 3'];
    function2(data);
  };

  const function2 = (data) => {
    const variable = 'data';
    console.log(variable, data);
  };

  return (
    <div>
      <h1>Пример компонента с двумя стрелочными функциями</h1>
      <button onClick={function1}>Вызвать функцию 1</button>
    </div>
  );
};

export default CustomComponent;
