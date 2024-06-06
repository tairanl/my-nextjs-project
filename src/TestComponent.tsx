import React from 'react';

interface Props {
  name: string;
  age: number;
}

const TestComponent: React.FC<Props> = ({ name, age }) => {
  const greet = (person: string) => {
    console.log(`Hello, ${person}`);
  };

  greet(name);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

// 一个未使用的变量，用于触发 ESLint 和 TypeScript 的错误
const unusedVariable = 42;

export default TestComponent;
